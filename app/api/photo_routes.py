from flask import Blueprint
from flask_login import login_required
from app.models import Photo

photo_routes = Blueprint('photos', __name__)

@photo_routes.route('/')
def get_photos():
    '''
    return all photos
    '''
    query = Photo.query.all()
    return {'photos': [photo.to_dict() for photo in query]}