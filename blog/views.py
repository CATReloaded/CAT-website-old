from django.shortcuts import render
from .models import *
from django.core.paginator import Paginator
from django.shortcuts import get_object_or_404
from django.db.models import Q


def blogs(request):

    blog_category = request.GET.get("blog-category",None)
    search = request.GET.get("search",None)
    
    articles = Article.objects.all()

    if search is not None :
        articles = articles.filter(Q(body__icontains=search) | Q(title__icontains=search))
    
    if blog_category is not None :
        articles = articles.filter(category_id=blog_category)
    
    paginator = Paginator(articles.order_by('-date'),8)
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
    article = get_object_or_404(Article,title=art)
    related_atrs = Article.objects.filter(category=article.category).exclude(id=article.id)[:3]
    
    if request.method == "POST":
        try :
            c = Comment.objects.create(
                comment=request.POST.get("comment",None),
                article_id=article.id,
                anynous_name=request.POST.get("name",None),
                anynous_email=request.POST.get("email",None),
                anynous_website=request.POST.get("website",None),
            )
            c.save()
        except:
            pass
    context = {
        "article" : article,
        "comments" : article.comments.all(),
        "related_articles" : related_atrs,
    }    
    return render(request, 'blog/single_blog.html',context)