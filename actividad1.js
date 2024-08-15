//Actividad N1 
//Aprendiz: GISELL OROZCO
//1.Definir variables que almacenen los siguientes datos:
// Un nombre: "Pepe"
// Una edad: 25
// Un precio: $99.90
// Los nombres de tus series favoritas: "Dark", "Mr Robot", "Castlevania"
// Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.

//Procedemos a definir nuestras variables
let nombre = "Pepe";
let edad = 25;
let precio = 99.90;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];

// y un array de objetos para las películas, donde cada objeto representa una película
let peliculasFavoritas = [
  {
    nombre: "Avengers End Game",
    año: 2019,
    protagonistas: ["Robert Downey Jr", "Chris Evans", "Scarlett Johannson"]
  },
  {
    nombre: "Mamma mia",
    año: 2008,
    protagonistas: ["Meryl Streep", "Amanda Seyfrield",]
  },
  {
    nombre: "Fragmentado",
    año: 2016,
    protagonistas: ["James McAvoy","Anya Taylor-Joy", "Bruce Willis"]
  }
];

//2.Mostrar todos esos valores por consola
//Asi que Mostramos los valores iniciales
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio:", precio);
console.log("Series favoritas:", seriesFavoritas);
console.log("Películas favoritas:", peliculasFavoritas);

//3.Incrementamos la edad en 1 y la volvemos a mostrar
edad++;
console.log("Nueva edad:", edad);

//4.Agregamos una serie a la lista de series favoritas y la volvemos a mostrar
seriesFavoritas.push("Stranger Things");
console.log("Nuevas series favoritas:", seriesFavoritas);