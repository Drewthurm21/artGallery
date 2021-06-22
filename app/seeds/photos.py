from app.models import db, Photo


def seed_photos():
    photos = [
        Photo(name='cat', photo_url='https://artgallerybucket.s3.us-east-2.amazonaws.com/a2ec46d0d0874ec39f4341c7e0ced789.jpg'),
        Photo(name='owl1', photo_url='https://artgallerybucket.s3.us-east-2.amazonaws.com/1a3c4e5cab8b4c5ab9773d7245234058.jpg'),
        Photo(name='leaf', photo_url='https://artgallerybucket.s3.us-east-2.amazonaws.com/92062f4ae40e4223a406c5589a9a4544.jpg'),
        Photo(name='pines', photo_url='https://artgallerybucket.s3.us-east-2.amazonaws.com/fac0a40a58e94580b080a9b237b22e96.jpg'),
        Photo(name='plant', photo_url='https://artgallerybucket.s3.us-east-2.amazonaws.com/15e961b591b14fce8184c877097a2562.jpg'),
        Photo(name='flower', photo_url='https://artgallerybucket.s3.us-east-2.amazonaws.com/1db8990e875841b8abb38262ec33e717.jpg'),
        Photo(name='mountain', photo_url='https://artgallerybucket.s3.us-east-2.amazonaws.com/e0916cac2a8546f6ac5ccf37dff1da07.jpg'),
        Photo(name='mushroom', photo_url='https://artgallerybucket.s3.us-east-2.amazonaws.com/a1b101ec74f44bca889ba1554c632e8b.jpg'),
        Photo(name='mushrooms', photo_url='https://artgallerybucket.s3.us-east-2.amazonaws.com/199e9eb26c4b4220a58fde8767b9e9d5.jpg'),
        Photo(name='smallbird', photo_url='https://artgallerybucket.s3.us-east-2.amazonaws.com/51eb412a41b544f5b42e4af84f53751e.jpg')
    ]

    for photo in photos:
        db.session.add(photo)

    db.session.commit()


def undo_photos():
    db.session.execute('TRUNCATE photos RESTART IDENTITY CASCADE;')
    db.session.commit()