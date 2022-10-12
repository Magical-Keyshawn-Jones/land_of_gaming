from typing import Optional
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
import bcrypt
from ..serializers import UserSerializer, Users
import jwt
from jwt.exceptions import ExpiredSignatureError
# I don't know how to hide jwt key in production
from ..secrets import jwtKey

    # jwtHeader = jwt.get_unverified_header(token)
    # try:
    #     verify = jwt.decode(token, key = jwtKey, algorithms = [jwtHeader['alg']])
    # except ExpiredSignatureError as error:
    #     print(f'signature expired, {error}')



# User Functions
# Retrieve all Users
@api_view(['GET'])
def getAll(request):
    users = Users.objects.all()
    serializers = UserSerializer(users, many=True)
    hashes = []
    for x in serializers.data:
        hashes.append(x['password'])

    results = bcrypt.checkpw('password123'.encode('UTF-8'), hashes[0].encode())

    # return Response(results)
    return Response(serializers.data)

@api_view(['POST'])
def registerUser(request):

    username = request.data['username']
    password = request.data['password']
    salt = bcrypt.gensalt(8)

    hashPassword = bcrypt.hashpw(password.encode('UTF-8'), salt)
    stringHash = hashPassword.decode()
    # stringHash.encode()

    user = {
        'username': username,
        'password': stringHash,
    }

    serializer = UserSerializer(data = user)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def loginUser(request):
    username = request.data['username']
    password = request.data['password']

    users = Users.objects.all()
    serializer = UserSerializer(users, many=True)
    storePassword = []

    for x in serializer.data:
        if x['username'] == username:
            storePassword.append(x['password'])

    results = bcrypt.checkpw(password.encode('UTF-8'), storePassword[0].encode())

    payload_data = {
        'username': username,
        'password': password
    }

    token = jwt.encode(
        payload = payload_data,
        key = jwtKey,
        # I don't know how to hide jwt key in production
    )

    payload_data['token'] = token


    return Response(results)