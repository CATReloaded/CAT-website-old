from django.contrib import admin
from .models import *

class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title","author","likes","comments_num")

admin.site.register(Article,ArticleAdmin)
admin.site.register(Category)
admin.site.register(Comment)