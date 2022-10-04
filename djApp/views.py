from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse('Welcome to my API Server')

def deeper(request):
    return HttpResponse('Going deeper I see..')