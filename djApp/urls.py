from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index, name='index'),
    # path('1/', views.deeper, name='deeper'),
    path('json/', views.testingJSON, name='testingJSON'),
    # path('game/', views.insertData, name='insertData')
]