from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from ..serializers import VideoGamesSerializers, VideoGames

# Retrieves all Video Games
@api_view(['GET'])
def getGameReviews(request):
    games = VideoGames.objects.all()

    # "many" attribute: True = normalize many items. False = normalize just one a two
    serializer = VideoGamesSerializers(games, many=True)
    return Response(serializer.data)

# Post a Video Game Review
@api_view(['POST'])
def createGameReview(request):
    serializer = VideoGamesSerializers(data = request.data)
    if serializer.is_valid():
        serializer.save()
    
    return Response(serializer.data)