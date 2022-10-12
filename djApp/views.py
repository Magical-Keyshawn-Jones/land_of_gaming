from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
import jwt
from jwt.exceptions import ExpiredSignatureError
# I don't know how to hide jwt key in production
from .secrets import jwtKey

# Make a separate folder for views to organize functions


#Set Debug to off, Switch back the database
# Key: Line 35 = Game, Line 54 = User
# Create your views here.

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
