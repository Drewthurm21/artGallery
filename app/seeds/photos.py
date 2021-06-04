from app.models import db, Photo


def seed_photos():
    photo1 = Photo(name='cat', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/cat.JPG?raw=true')
    photo2 = Photo(name='owl1', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/owl1.JPG?raw=true')
    photo3 = Photo(name='leaf', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/leaf.JPG?raw=true')
    photo4 = Photo(name='owl2', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/owl2.JPG?raw=true')
    photo5 = Photo(name='pines', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/pines.JPG?raw=true')
    photo6 = Photo(name='plant', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/plant.JPG?raw=true')
    photo7 = Photo(name='flower', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/flower.JPG?raw=true')
    photo8 = Photo(name='mountain', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/mountain.JPG?raw=true')
    photo9 = Photo(name='mushroom', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/mushroom.JPG?raw=true')
    photo10 = Photo(name='mushrooms', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/mushrooms.JPG?raw=true')
    photo11 = Photo(name='smallbird', photo_url='https://github.com/Drewthurm21/artGallery/blob/main/images/smallbird.JPG?raw=true')


def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()