from django.urls import path
from .views import single_blog, blogs

urlpatterns = [
    path('single_blog/<str:art>', single_blog, name='single_blog'),  # Detail view for every blog will be here 
    path('', blogs, name='blogs'),

]