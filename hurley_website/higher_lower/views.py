from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def home(request):
    #return HttpResponse('<h1>Higher Lower Home</h>')
    return render(request, 'higher_lower/index.html')

def about(request):
    return HttpResponse('<h1>Higher Lower About</h>')