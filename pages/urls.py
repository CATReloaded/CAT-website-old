from django.urls import path
from .views import home, members, circle, events, rewards
urlpatterns = [
    path('', home, name='home'),
    path("circle/<str:circle>/", circle , name='circle'),
    path('members/', members, name='members'),
    path('events/', events, name='events'),
    path('rewards/', rewards, name='rewards'),
]