from django.shortcuts import render
from .models import *
from django.core.paginator import Paginator
from django.shortcuts import get_object_or_404


def blogs(request):
    articles = Article.objects.all().order_by('-date')
    paginator = Paginator(articles,8)
    page_number = request.GET.get('page')
    try:
        page_obj = paginator.page(page_number)
    except:
        page_obj = paginator.page(1)

    context = {
        "page_obj" : page_obj,
        "categories" : Category.objects.all()
    }
    return render(request, 'blog/blogs.html',context)

def single_blog(request,art):
    atricle = get_object_or_404(Article,body__contains=art)
    related_atrs = Article.objects.filter(category=atricle.category)[:3]
    context = {
        "article" : atricle,
        "comments" : atricle.comments.all(),
        "related_articles" : related_atrs,
    }
    return render(request, 'blog/single_blog.html',context)