from flask import Blueprint
from flask_login import login_required
from app.models import Photo

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