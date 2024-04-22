# scraper/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('api/scrape/', views.MyScraperView.as_view(), name='scrape'),
]
