from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Photo
from app.aws import get_unique_filename, upload_file_to_s3

photo_routes = Blueprint('photos', __name__)


@photo_routes.route('')
def get_photos():
    '''
    return all photos
    '''
    query = Photo.query.all()
    return {'photos': [photo.to_dict() for photo in query]}


@photo_routes.route('/<int:id>')
def get_photo(id):
    '''
    return a photo by id
    '''
    photo = Photo.query.get(id)
    return photo.to_dict()


@photo_routes.route('', methods=['POST'])
@login_required
def upload_photo():
    '''
    upload photo to aws bucket and store url in db
    '''
    title = request.form['title']
    image = request.files['image']

    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)
    photo_url = upload['url']
    
    photo = Photo(
        name=title,
        photo_url=photo_url
    )

    db.session.add(photo)
    db.session.commit()
    return photo.to_dict()