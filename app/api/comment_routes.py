from flask import Blueprint, request
from app.models import db, Comment
from sqlalchemy import desc


comment_routes = Blueprint('comments', __name__)


@comment_routes.route('')
def get_comments():
    '''
    return all comments
    '''
    query = Comment.query.order_by(desc(Comment.created_at)).all()
    comments = [comment.to_dict() for comment in query]
    return {'comments': comments}


@comment_routes.route('<int:id>', methods=['DELETE'])
def remove_comment(id):
    '''
    remove a comment by id
    '''
    comment = Comment.query.get(id)
    db.session.remove(comment)
    db.session.commit()
    return f'Yeet, GTFO Troll! {"comment": comment}'
