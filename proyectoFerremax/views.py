from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def catalogo(request):
    return render(request, 'catalogo.html', context={'products': products})

def login(request):
    return render(request, 'login.html')

def producto(request):
    return render(request, 'producto.html')

def registro(request):
    return render(request, 'registro.html')