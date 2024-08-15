#Actividad N1 
#Aprendiz: GISELL OROZCO

#1. Definir variables que almacenen los siguientes datos:

#Un nombre: "Pepe"
#Una edad: 25
#Un precio: $99.90
#Los nombres de tus series favoritas: "Dark", "Mr Robot", "Castlevania"
# Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.

#Procedemos a definir nuestras variables
nombre = "Pepe"
edad = 25
precio = 99.90
series_favoritas = ["Dark", "Mr Robot", "Castlevania"]
peliculas_favoritas = [
    {"nombre": "El Padrino", "año": 1972, "protagonistas": ["Marlon Brando", "Al Pacino"]},
    {"nombre": "Interstellar", "año": 2014, "protagonistas": ["Matthew McConaughey", "Anne Hathaway"]}
]

#2.Mostrar todos esos valores por consola
#Asi que Mostramos los valores iniciales
print("Nombre:", nombre)
print("Edad:", edad)
print("Precio:", precio)
print("Series favoritas:", series_favoritas)
print("Películas favoritas:", peliculas_favoritas)

#3. Incrementar la edad en 1 y volver a mostrarla.
# Incrementamos la edad
edad = edad + 1
print("Nueva edad:", edad)

#4. Agregar una serie a la lista de series favoritas y volver a mostrarla.
#Para poder agregar la nueva serie a la lista, decidi crear una variable llamada nueva_serie la cual almacena el string y despues lo añade con un .append al final de la lista creada en la variable del primer punto "series_favoritas"
nueva_serie = input("¿Cuál es tu nueva serie favorita?: ")

#Agregamos la nueva serie a la lista
series_favoritas.append(nueva_serie)
print("su lista de series favoritas ahora es:", series_favoritas)