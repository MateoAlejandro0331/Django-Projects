from django.urls import path, re_path
from .views import *


urlpatterns = [
    path('host/', create_hospedador),
    re_path(r'^host/([0-9])$', delete_hospedador),
    re_path(r'^guest/([0-9])$', delete_huesped),
    path('guest/', create_huesped),
    path('match/', match_huesped,),
    path('filterhost/', filter_hospedador),
    path('filterguest/', filter_huesped),
]
