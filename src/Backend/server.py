from fastapi import FastAPI

server = FastAPI()

@server.get('/welcome') 
def welcome():
    return {"Message": "Welcome to my server!"}