from app.models import db, Photo


def seed_photos():
    photos = [
        Photo(name='cat', photo_url='https://jessalopezart.s3.us-east-2.amazonaws.com/cat.JPG'),
        Photo(name='owl1', photo_url='https://jessalopezart.s3.us-east-2.amazonaws.com/owl1.JPG'),
        Photo(name='leaf', photo_url='https://jessalopezart.s3.us-east-2.amazonaws.com/leaf.JPG'),
        Photo(name='pines', photo_url='https://jessalopezart.s3.us-east-2.amazonaws.com/pines.JPG.'),
        Photo(name='plant', photo_url='https://jessalopezart.s3.us-east-2.amazonaws.com/plant.JPG.'),
        Photo(name='flower', photo_url='https://jessalopezart.s3.us-east-2.amazonaws.com/flower.JPG'),
        Photo(name='mountain', photo_url='https://jessalopezart.s3.us-east-2.amazonaws.com/mountain.JPG'),
        Photo(name='mushroom', photo_url='https://jessalopezart.s3.us-east-2.amazonaws.com/mushroom.JPG'),
        Photo(name='mushrooms', photo_url='https://jessalopezart.s3.us-east-2.amazonaws.com/mushrooms.JPG'),
        Photo(name='smallbird', photo_url='https://jessalopezart.s3.us-east-2.amazonaws.com/smallbird.JPG')
    ]

    for photo in photos:
        db.session.add(photo)

    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()