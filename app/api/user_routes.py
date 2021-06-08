from flask import Blueprint, request
from flask_login import login_required
from app.models import db, User

user_routes = Blueprint('users', __name__)


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('', methods=['PATCH'])
@login_required
def update_user():
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']

    user = User.query.get(1)
    user.username = username
    user.email = email
    user.password = password
    
    db.session.update(user)
    db.session.commit()