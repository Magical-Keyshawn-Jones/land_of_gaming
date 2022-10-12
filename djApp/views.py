from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from flask import request
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import VideoGamesSerializers
from .models import VideoGames
import bcrypt
import jwt
from jwt.exceptions import ExpiredSignatureError
# I don't know how to hide jwt key in production
from .secrets import jwtKey
# Make a separate folder for views to organize functions


#Set Debug to off, Switch back the database
# Key: Line 35 = Game, Line 54 = User
# Create your views here.

# Testing JWT Tokens
payload_data = {
    "sub": 4242,
    "name": 'Doorknob Jones',
    "nickname": 'kiwi',
    # "exp": datetime.now(),
}

token = jwt.encode(
    payload = payload_data,
    key = jwtKey,
    # I don't know how to hide jwt key in production
    # Keep key secret
)

# If you don't know how the token was created
jwtHeader = jwt.get_unverified_header(token)

# If you know everything about the token

# Checking if token is expired
try:
    verify = jwt.decode(token, key = jwtKey, algorithms = [jwtHeader['alg']])
except ExpiredSignatureError as error:
    print(f'signature expired, {error}')

# print(something.text)

# Renders the Application
def index(request):
    return render(request, 'index.html')


def testingJSON(request):
    comments = [
        {
            'name': 'Bellventus',
            'username': 'Billy',
            'text': "I dont' care!"
        },
        {
            'name': 'Kriegster',
            'username': 'Tommy',
            'text': 'Wow, want to go to the mall?' 
        }
    ]

    return JsonResponse({'comments': comments})

# Retrieves all Video Games
@api_view(['GET'])
def deeper(request):
    # person = {'name': 'Dah Baby', 'age': 16}
    games = VideoGames.objects.all()

    # many att. - True = normalize many items. False = normalize just one a two
    serializer = VideoGamesSerializers(games, many=True)
    return Response(serializer.data)

# Post a Video Game Review
@api_view(['POST'])
def insertData(request):
    serializer = VideoGamesSerializers(data = request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)


# User Functions
@api_view(['POST'])
def registerUser(request):
    
    salt = bcrypt.gensalt(13)
    password = request.data['password']
    hashPassword = bcrypt.hashpw(password.encode('UTF-8'), salt)
    request.session = hashPassword
    print(request.session)
    return Response(hashPassword)

@api_view(['POST'])
def loginUser(request):

    password = request.data['password']
    hash = request.data['hash']
    print(password, hash)
    results = bcrypt.checkpw(password.encode('UTF-8'), hash)
    return Response(results)