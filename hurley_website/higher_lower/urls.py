from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='higher_lower-home'),
    path('about/', views.about, name='higher_lower-about'),
]
