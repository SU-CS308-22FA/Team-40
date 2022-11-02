
from fastapi import Depends, FastAPI, Header, HTTPException
#this line imports users.py from the routers folder
from routers import users
 
import os
from fastapi_sqlalchemy import DBSessionMiddleware #middleware helper 
from fastapi.middleware.cors import CORSMiddleware
#Also it will be will be import load_dotenv to connect to our db 
from dotenv import load_dotenv

#this line is to connect to our base dir and connect to our .env file
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))

app = FastAPI()
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "https://team40.herokuapp.com",
    ".herokuapp.com",
    ".team40.com"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#this is to access the db so any route can acccess the database session
app.add_middleware(DBSessionMiddleware,
                    db_url=os.environ["SQLALCHEMY_DATABASE_URI"])

@app.get("/")
async def root():
    return {"message": "Hello World"}

#this imports the route in the user into the main file
app.include_router(users.router)
