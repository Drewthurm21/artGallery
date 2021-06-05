from flask import Blueprint
from app.models import db, Comment

comment_routes = Blueprint('comments', __name__)


@comment_routes.route('/')
def get_comments():
    query = Comment.query.all()
    return {'comments': [comment.to_dict() for comment in query]}
