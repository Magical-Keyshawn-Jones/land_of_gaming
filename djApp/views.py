from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import VideoGames
# Make a separate folder for views to organize functions

# Create your views here.
def index(request):
    test = {"message": "Welcome to my Django/Python/React/API!!!"}
    return JsonResponse({'message': test})

def deeper(request):
    return ({"message": 'Going deeper I see..'})

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

def insertData(request):
    if request.method == 'POST':
        title = request.POST['title']
        rating = request.POST['rating']
        platform = request.POST['platform']

        newVideoGame = VideoGames(title = title, rating = rating, platform = platform)
        newVideoGame.save()
    
    message = {"message": "Successfully created a review"}

    return JsonResponse({'message': message})