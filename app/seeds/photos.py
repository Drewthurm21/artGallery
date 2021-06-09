from app.models import db, Photo


def seed_photos():
    photos = [
        Photo(name='cat', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/cat.JPG?raw=true'),
        Photo(name='owl1', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/owl1.JPG?raw=true'),
        Photo(name='leaf', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/leaf.JPG?raw=true'),
        # Photo(name='owl2', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/owl2.JPG?raw=true'),
        Photo(name='pines', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/pines.JPG?raw=true'),
        Photo(name='plant', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/plant.JPG?raw=true'),
        Photo(name='flower', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/flower.JPG?raw=true'),
        Photo(name='mountain', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/mountain.JPG?raw=true'),
        Photo(name='mushroom', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/mushroom.JPG?raw=true'),
        Photo(name='mushrooms', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/mushrooms.JPG?raw=true'),
        Photo(name='smallbird', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/smallbird.JPG?raw=true')
    ]

    for photo in photos:
        db.session.add(photo)

    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()