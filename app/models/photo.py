from .db import db


class Photo(db.Model):
    __tablename__ = 'photos'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100), nullable = False)
    photo_url = db.Column(db.Text, nullable = False, unique = True)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "photo_url": self.photo_url
        }