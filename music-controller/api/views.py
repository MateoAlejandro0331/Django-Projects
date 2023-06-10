from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Room
from .serializers import RoomSerializer

# Create your views here.
"""Class that extends from generics.CreateAPIView
    that is a view already set up to return all the diferent room
"""
class RoomView(generics.CreateAPIView):
    """s
        queryset = variable to store all the Rooms
        serialzer_class = this is the way to serialize
                all the objects in the queryset, 
                by itself queryset cant do it
    """
    queryset = Room.objects.all()
    serializer_class = RoomSerializer