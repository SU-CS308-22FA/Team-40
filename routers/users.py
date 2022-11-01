from http.client import HTTPException
import os
import bcrypt
from fastapi import APIRouter, status
from fastapi_sqlalchemy import db
from fastapi_login import LoginManager
from fastapi import Depends
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login.exceptions import InvalidCredentialsException
from model import User as ModelUser
from schema import UserBase

SECRET = os.urandom(24).hex()

router = APIRouter()

manager = LoginManager(SECRET, token_url='/auth/token')

@manager.user_loader()
def load_user(email: str):  # could also be an asynchronous function
    user = db.session.query(ModelUser).get(email)
    return user

@router.post('/auth/login')
def login(data: OAuth2PasswordRequestForm = Depends()):
    email = data.username
    password = data.password
    user = load_user(email)  # we are using the same function to retrieve the user
    
    if db.session.query(ModelUser).get(email) == None:
        raise InvalidCredentialsException  # you can also use your own HTTPException
    elif not bcrypt.checkpw(password.encode('utf-8'), user.password.encode('utf-8')):
        raise InvalidCredentialsException
    
    access_token = manager.create_access_token(
        data=dict(sub=email)
    )
    return {'access_token': access_token, 'token_type': 'bearer'}


@router.post("/register", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserBase):
    hashed_password = bcrypt.hashpw(user.password.encode('utf-8'), bcrypt.gensalt())
    User = ModelUser(first_name=user.first_name, last_name=user.last_name, username=user.username, email=user.email, password = hashed_password)
    db.session.add(User)
    db.session.commit()
    db.session.refresh(User)
    return User

@router.get("/listuser/{email}")
def read_user(email: str):
    user = db.session.query(ModelUser).get(email)
    if not user:
        raise HTTPException(status_code=404, detail=f"user with email {email} not found")
    return user

@router.get("/listuser/")
def read_user():
    user_list = db.session.query(ModelUser).all()
    return user_list

@router.delete("/deleteuser/{email}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(email: str):
    user = db.session.query(ModelUser).get(email)
    if user:
        db.session.delete(user)
        db.session.commit()
        db.session.close()
    else:
        raise HTTPException(status_code=404, detail=f"user with email {email} not found")
    return None

@router.put("/updateusername/{email}")
def update_username(email: str, username: str):
    user = db.session.query(ModelUser).get(email)
    if user:
        user.username = username
        db.session.commit()
    db.session.close()
    if not user:
        raise HTTPException(status_code=404, detail=f"user with email {email} not found")
    return user