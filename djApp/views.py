from django.shortcuts import render
from django.http import HttpResponse
from .models import Question

# Create your views here.
def index(request):
    return render(request, 'index.html')

def deeper(request):
    return ({"message": 'Going deeper I see..'})