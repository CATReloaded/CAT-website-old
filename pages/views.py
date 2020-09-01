from django.shortcuts import render
from .models import *
from django.shortcuts import get_object_or_404

def home(request):
    circles = Circle.objects.all()
    context = {
        'technical_circles':circles.filter(circle_type="technical"),
        'non_technical_circles' : circles.filter(circle_type="non-technical")
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
        'mentors':circle.mentors,
        'members':circle.members
    }
    return render(request, 'pages/circle.html', context)

def events(request):
    context = {

    }
    return render(request, 'pages/events.html', context)

def rewards(request):
    context = {

    }
    return render(request, 'pages/rewards.html', context)