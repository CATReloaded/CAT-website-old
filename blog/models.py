from django.db import models
from pages.models import Member

class Article(models.Model):
    title = models.CharField(max_length=50)
    body = models.TextField()
    auther = models.ForeignKey(Member,on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(default=0)

class Image(models.Model):
    image = models.ImageField()
    article = models.ForeignKey(Article,on_delete=models.CASCADE,related_name='images')

class comment(models.Model):
    comment = models.TextField()
    date = models.DateTimeField(auto_now_add=True)
    auther = models.ForeignKey(Member,on_delete=models.CASCADE,related_name="comments")

