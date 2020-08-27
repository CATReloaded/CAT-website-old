from django.shortcuts import render

# Create your views here.

def home(request):
    context = {

    }
    return render(request, 'pages/home.html', context)


def members(request):
    context = {

    }
    return render(request, 'pages/members.html', context)

def circle(request):
    context = {

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