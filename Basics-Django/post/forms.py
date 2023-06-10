from django.forms import ModelForm, Textarea
from .models import Post

class PostForm(ModelForm):
    class Meta: # Meta data into de from
        model = Post # The model gonna have the atributes of the class Post
        fields = '__all__' # Regarding to the fields
                            # All fields are ganna be base in the model Post i import (line 6)
        widgets = {
            'body': Textarea() # Changes the body to textarea
        }