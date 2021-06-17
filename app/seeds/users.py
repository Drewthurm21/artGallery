from app.models import db, User
import os

ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL')
ADMIN_PASS = os.environ.get('ADMIN_PASS')
# Adds a demo user, you can add other users here if you want
def seed_users():

    owner = User(
            username='OWNER', 
            email=ADMIN_EMAIL,
            password=ADMIN_PASS
        )

    db.session.add(owner)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
