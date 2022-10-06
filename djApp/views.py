from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Question

# Create your views here.
def index(request):
    return render(request, 'index.html')

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

    # data = {'comments' : comments}

    # return render(request, 'index.html', data)

    return JsonResponse({'comments' : comments})