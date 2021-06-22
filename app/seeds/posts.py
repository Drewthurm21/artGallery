from app.models import db, Post
from faker import Faker
import datetime

faker = Faker()


def seed_posts():
    post = Post(
        title='Welcome!', 
        body='Thank you for stopping by.',
        photo_url=None,
    )
    db.session.add(post)
    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()