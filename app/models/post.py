from .db import db
import datetime


class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key = true)
    title = db.Column(db.String(100), nullable=False)
    body = db.Column(db.Text, nullable = False)
    photo_url = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)


    def to_dict(self):
        return {   
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "photo_url": self.photo_url,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }   