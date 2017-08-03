# #############################
# Insert New User Cruedentials
# #############################


import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from tabledef import *
 
engine = create_engine(connString, echo=True)
 
# create a Session
Session = sessionmaker(bind=engine)
session = Session()

# user = User("kmcentire","gdipw5")
# session.add(user)

# user = User("jcox","gdipw4")
# session.add(user)

# user = User("jsiscoe","password")
# session.add(user)
 
# user = User("mshaw","gdipw1")
# session.add(user)
 
# user = User("scarr","gdipw2")
# session.add(user)
 
# user = User("pventura","gdipw3")
# session.add(user)
 
user = User("hlemons","gdipw10")
session.add(user)

# commit the record the database
session.commit()