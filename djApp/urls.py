from django.urls import path
from . import views 

urlpatterns = [
    # HomePages
    path('', views.index, name='index'),
    path('GamingForum/login/', views.index, name = 'Login'),
    path('KnuckleBones/', views.index, name = 'KnuckleBones'),
    path('TicTacToe/', views.index, name = 'TacTacToe'),
    path('Hangman/', views.index, name = 'Hangman'),
    # Endpoints
    path('game/', views.deeper, name = 'deeper'),
    path('game/', views.insertData, name = 'insertData'),
    # path('json/', views.testingJSON, name='testingJSON'),
    path('user/register', views.registerUser, name = 'registerUser'),
    path('user/login', views.loginUser, name = 'loginUser')
]