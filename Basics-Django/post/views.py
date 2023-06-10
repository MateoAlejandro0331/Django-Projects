from django.shortcuts import render, redirect, get_object_or_404
from .forms import PostForm
from .models import Post

# Create your views here.
def detail(request, id):
    post = get_object_or_404(Post, pk=id)
    return render(request, 'detail.html', {'post': post})

def delete(request, id):
    post = get_object_or_404(Post, pk=id)
    post.delete() #delete the post
    return redirect('/website') #Tuve problemas por que no puse el slash primero

def new(request):
    if request.method == 'POST':
        form = PostForm(request.POST) # This is a dictionary
        if form.is_valid(): #check if form is valid
            form.save() # Save into the database
    else:
        form = PostForm() # This is a dictionary
    return render(request, 'new.html', {'form': form})