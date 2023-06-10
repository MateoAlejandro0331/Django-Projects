from django.urls import path
from . import views

urlpatterns = [
    path('', views.welcome, name='home') #Nunca se te olvide poner el ultimo slash en la ruta
]