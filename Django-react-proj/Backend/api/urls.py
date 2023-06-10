from django.urls import re_path
from .views import students_list, students_detail

urlpatterns = [
    re_path(r'^students/$', students_list),
    re_path(r'^students/([0-9])$', students_detail),
]
