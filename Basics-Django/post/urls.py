from django.urls import path
from . import views

urlpatterns = [
    path('new/', views.new, name='new'), #name is for use the url pattern in the tamplates
    path('<int:id>/', views.detail, name='detail'),
    path('delete/<int:id>/', views.delete, name='delete'),
]
