from app.models import db, Post
from faker import Faker
import datetime

faker = Faker()

def seed_posts():
    for i in range(5):
        post = Post(
            title=faker.words(3), 
            body=faker.sentences(14),
            photo_url=None,
        )
        db.session.add(post)
    db.session.commit()



def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()