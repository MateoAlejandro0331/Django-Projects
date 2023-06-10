from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
from post.models import Post

# Create your views here.
def welcome(request):
    return render(request, 'welcome.html', 
                {'current_time': datetime.now(),
                 'posts': Post.objects.all(),
                 'num_post': Post.objects.count()}) #Passing variables to the template

