from rest_framework import serializers
from .models import VideoGames, Users

class VideoGamesSerializers(serializers.ModelSerializer):
    class Meta:
        model = VideoGames
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'