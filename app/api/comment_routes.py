from flask import Blueprint
from app.models import db, Comment
from sqlalchemy import desc


comment_routes = Blueprint('comments', __name__)


@comment_routes.route('')
def get_comments():
    '''
    return all comments
    '''
    query = Comment.query.order_by(desc(Comment.created_at)).all()
    return {'comments': [comment.to_dict() for comment in query]}
