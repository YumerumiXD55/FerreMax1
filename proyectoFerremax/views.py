from django.shortcuts import render
import requests

def index(request):
    # Llamar a la API de Firebase
    response = requests.get('https://ferremas-a6d03-default-rtdb.firebaseio.com/.json')
    
    # Verificar si la solicitud fue exitosa
    if response.status_code == 200:
        # Convertir la respuesta JSON a un diccionario de Python
        data = response.json()

        # Extraer productos de todas las categorías
        productos = []
        for categoria, items in data.items():
            for item in items:
                producto = {
                    'nombre': item.get('Nombre', 'Sin Nombre'),
                    'precio': item.get('Precio', [{}])[0].get('Valor', 0),
                    'codigo': item.get('Código del producto', 'Sin Código'),
                    'imagen_url': 'URL de imagen predeterminada o dinámica según tu estructura'  # Ajustar según corresponda
                }
                productos.append(producto)
    else:
        productos = []

    # Pasar los datos de productos al template
    return render(request, 'index.html', {'productos': productos})
def catalogo(request):
    response = requests.get('https://ferremas-a6d03-default-rtdb.firebaseio.com/.json')
    
    # Verificar si la solicitud fue exitosa
    if response.status_code == 200:
        # Convertir la respuesta JSON a un diccionario de Python
        data = response.json()

        # Extraer productos de todas las categorías
        productos = []
        for categoria, items in data.items():
            for item in items:
                producto = {
                    'nombre': item.get('Nombre', 'Sin Nombre'),
                    'precio': item.get('Precio', [{}])[0].get('Valor', 0),
                    'codigo': item.get('Código del producto', 'Sin Código'),
                    'imagen_url': 'URL de imagen predeterminada o dinámica según tu estructura'  # Ajustar según corresponda
                }
                productos.append(producto)
    else:
        productos = []

    # Pasar los datos de productos al template
    return render(request, 'catalogo.html', {'productos': productos})

def login(request):
    return render(request, 'login.html')

def producto(request): 
    return render(request, 'producto.html')

def registro(request):
    return render(request, 'registro.html')
