from app.models import db, Comment


def seed_comments():
    comments = [
        Comment(
            name="Drew",
            email="drewthurmcodes@gmail.com",
            content="This art looks awesome, and I'm super happy to be working with you guys!"
        ),
        
        Comment(
            name="Drew",
            email="drewthurmcodes@gmail.com",
            content="I think my favorite is the mushroom dude!"
        ),
        
        Comment(
            name="Drew",
            email="drewthurmcodes@gmail.com",
            content="The owls are friggin awesome too!"
        ),
        
        Comment(
            name="Drew",
            email="drewthurmcodes@gmail.com",
            content="These are the test comments, but I totally mean them lol!"
        ),
    ]
    
    for comment in comments:
        db.session.add(comment)

    db.session.commit()




def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()