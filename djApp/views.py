from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from .serializers import VideoGamesSerializers
# from .models import VideoGames
# from itsdangerous import Serializer
# Make a separate folder for views to organize functions


#Set Debug to off, Switch back the database
# Create your views here.
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

# @api_view(['GET'])
# def deeper(request):
#     # person = {'name': 'Dah Baby', 'age': 16}
#     games = VideoGames.objects.all()

#     # many att. - True = normalize many items. False = normalize just one a two
#     serializer = VideoGamesSerializers(games, many=True)
#     return Response(serializer.data)

# @api_view(['POST'])
# def insertData(request):
#     serializer = VideoGamesSerializers(data = request.data)
#     if serializer.is_valid():
#         serializer.save()
    
#     return Response(serializer.data)
    