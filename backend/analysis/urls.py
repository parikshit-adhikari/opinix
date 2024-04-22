from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('api/upload/', views.MyFileView.as_view(), name='upload' ),
]