from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
# def say_hello(request):
#     return HttpResponse("Hello World")

def index(request):
    return render(request, "index.html")

def list(request):
    return render(request, "list.html")

def shop(request):
    return render(request, "shop.html")

def study(request):
    return render(request, "study.html")

def achieve(request):
    return render(request, "achieve.html")

def custom(request):
    return render(request, "custom.html")

