from django.urls import path
from . import views

urlpatterns = [
    path('fetch-movies/', views.fetch_movies, name='fetch_movies'),
    path('entries/', views.get_database_entries, name='get_database_entries'),  # This should match the view function
]
