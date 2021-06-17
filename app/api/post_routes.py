from flask import Blueprint, request
from flask_login import login_required
from app.models import db, Post
from app.aws import get_unique_filename, upload_file_to_s3
from sqlalchemy import desc

post_routes = Blueprint('posts', __name__)


@post_routes.route('')
def get_posts():
    '''
    return all posts
    '''
    query = Post.query.order_by(desc(Post.created_at)).all()
    posts = [post.to_dict() for post in query]
    return {'posts': posts}


@post_routes.route('', methods=['POST'])
@login_required
def create_post():
    '''
    create a new blog post
    '''
    title = request.form['title']
    body = request.form['body']
    url = None

    if 'image' in request.files:
        image = request.files['image']
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        url = upload['url']

    post = Post(
        title=title,
        body=body,
        photo_url=url
    )
    db.session.add(post)
    db.session.commit()
    return post.to_dict()


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
