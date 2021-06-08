from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Post


post_routes = Blueprint('posts', __name__)


@post_routes.route('')
def get_posts():
    '''
    return all posts
    '''
    query = Post.query.all()
    posts = [post.to_dict() for post in query]
    return {'posts': posts}


@post_routes.route('', methods=['POST'])
@login_required
def create_post():
    '''
    create a new blog post
    '''
    #finish this when blog form is complete 


@post_routes.route('<int:id>')
def get_post(id):
    '''
    return a single post by id
    '''
    post = Post.query.get(id)
    return post.to_dict()


@post_routes.route('<int:id>', methods=['DELETE'])
@login_required
def delete_post(id):
    '''
    return a single post by id
    '''
    post = Post.query.get(id)
    db.session.remove(post)
    db.session.commit()

    return { 'removed': post.to_dict() }
