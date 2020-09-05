from django.db import models
from pages.models import Member


class Category(models.Model):
    name = models.CharField(max_length=20)


class Article(models.Model):
    title = models.CharField(max_length=50)
    body = models.TextField()
    author = models.ForeignKey(Member,on_delete=models.CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(default=0)
    comments_num = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to="blogs_pics")
    category = models.ForeignKey(Category,on_delete=models.CASCADE,related_name='articles')



class comment(models.Model):
    comment = models.CharField(max_length=240)
    date = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(Member,on_delete=models.CASCADE,related_name="comments")
    article = models.ForeignKey(Article,on_delete=models.CASCADE,related_name="comments")
