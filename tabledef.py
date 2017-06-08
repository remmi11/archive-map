
# #######################
# create table and schema
# #######################


from sqlalchemy import *
from sqlalchemy import create_engine, ForeignKey
from sqlalchemy import Column, Date, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref

connString = 'postgresql://postgres:pass@192.168.1.10:5432/postgres'
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