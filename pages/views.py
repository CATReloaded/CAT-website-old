from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404
from blog.models import Article
from django.core import serializers
import json


def home(request):
    circles = Circle.objects.all()
    articles = serializers.serialize('json',Article.objects.all().order_by('-date')[:7],use_natural_foreign_keys=True)
    context = {
        'technical_circles':circles.filter(circle_type="technical"),
        'non_technical_circles' : circles.filter(circle_type="non-technical"),
        'circles': circles,
        'articles' : articles
    }
    return render(request, 'pages/home.html', context)


def members(request):
    all_members = Member.objects.all()
    context = {
        "cor":all_members.get(role="cor"),
        "leaders":all_members.filter(role="leader"),
        "founders":Founder.objects.all()
    }
    return render(request, 'pages/members.html', context)

def circle(request,circle):
    circle = get_object_or_404(Circle,name=circle)
    context = {
        'circle':circle,
        'leader':circle.leader,
        'mentors':circle.members.filter(role='mentor'),
        'members':circle.members.filter(role='member')
    }
    print(context)
    return render(request, 'pages/circle.html', context)

def events(request):
    context = {
        'events' : Event.objects.all().prefetch_related('images').order_by('-date')
    }
    return render(request, 'pages/events.html', context)

def rewards(request):
    context = {
        "circle_rewards" : Reward.objects.all()
    }
    return render(request, 'pages/rewards.html', context)

def about(request):
    return render(request, 'pages/about.html')
