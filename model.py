from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    first_name = Column(String(150))
    last_name = Column(String(150))
    username = Column(String(150))
    email = Column(String(150), primary_key=True)
    password = Column(String(150))
