from flask import Blueprint
from flask_login import login_required
from app.models import Post


post_routes = Blueprint('posts', __name__)


@post_routes.route('')
def get_posts():
    '''
    return all posts
    '''
    query = Post.query.all()
    posts = [post.to_dict() for post in query]
    return {'posts': posts}

@post_routes.route('<int:id>')
def get_post(id):
    '''
    return a single post by id
    '''
    post = Post.query.get(id)
    return post.to_dict()

