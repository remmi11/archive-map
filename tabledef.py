
# #######################
# create table and schema
# #######################


from sqlalchemy import *
from sqlalchemy import create_engine, ForeignKey
from sqlalchemy import Column, Date, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref

# define('DB_SERVER', 'nutty-blueberry.db.elephantsql.com');
# define('DB_USERNAME', 'jcfcqrso');
# define('DB_PASSWORD', 'ExNoFtbZT7_BNnmb5XFIwDIDwJHOVDK0');
# define('DB_DATABASE', 'jcfcqrso');

connString = 'postgresql://jcfcqrso:ExNoFtbZT7_BNnmb5XFIwDIDwJHOVDK0@nutty-blueberry.db.elephantsql.com:5432/jcfcqrso'
engine = create_engine(connString, echo=True)
Base = declarative_base()

 
########################################################################
class User(Base):
    """"""
    __tablename__ = "user"
 
    id = Column(Integer, primary_key=True)
    username = Column(String)
    password = Column(String)
 
    #----------------------------------------------------------------------
    def __init__(self, username, password):
        """"""
        self.username = username
        self.password = password

## original
#  ########################################################################
# class User(Base):
#     """"""
#     __tablename__ = "users"
 
#     id = Column(Integer, primary_key=True)
#     username = Column(String)
#     password = Column(String)
 
#     #----------------------------------------------------------------------
#     def __init__(self, username, password):
#         """"""
#         self.username = username
#         self.password = password
 


# create tables
Base.metadata.create_all(engine)