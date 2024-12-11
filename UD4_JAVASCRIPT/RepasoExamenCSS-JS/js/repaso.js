// EJs BÁSICOS de JAVASCRIPT !!

let nombre = "Pablo"
let edad = 17
let ciudad = "Teruel"

console.log("Hola, soy " + nombre + " tengo " + edad + " años y vivo en " + ciudad)

let numero = 5
let doble = numero * 2
let triple = numero * 3

console.log("El doble de " + numero + " es " + doble + " y el triple es " + triple)

let celsius = 24;
let fahrenheit = (celsius*9/5)+32;

console.log(celsius + "ºC son " + fahrenheit + " grados fahrenheit")

// EJ

let dias = 10;
let semanas = parseInt(dias / 7)
let sobran = dias % 7;

console.log(dias + " equivalen a " + semanas + " semanas y " + sobran + " dias.")

let edad1 = 30;
let edad2 = 17;

if (edad1 > edad2 ) {
    console.log("Edad1 es MAYOR a Edad2")
} else if (edad1 < edad2) {
    console.log("Edad1 es MENOR a Edad2")
} else {
    console.log("Ambas edades son IGUALES")
}

let nota1 = 9;
let nota2 = 7;
let nota3 = 4;

let promedio = (nota1+nota2+nota3)/3

console.log("El promedio es " + promedio)

// EJ BÁSICOS, Un poco más altos, repaso general.
console.log("////////////////// EJ BÁSICOS, Un poco más altos, repaso general. ////////////////////")

let minutos = 90;
let horas = parseInt(minutos/60);
let minSobrantes = minutos % 60;

console.log("El viaje dura " + horas + " horas y " + minSobrantes + " minutos")


let largo = 20;
let ancho = 40;

let area = largo * ancho;
let perimetro = 2 * (largo + ancho)

console.log("El area es " + area + " y el perímtro son " + perimetro)

let precioOriginal = 80;
let descuento = (precioOriginal * 15)/100;
let precioFinal = precioOriginal - descuento;

console.log("El precio final es: " + precioFinal)

let edadActual = 17;
let jubilacion = 65;
let edadJubilacion = 2024 + (jubilacion - edadActual);

console.log("Te Jubilarás en el año: " + edadJubilacion)

// EJ AVANZADOS de JAVASCRIPT

for (i = 1; i <=10; i++) {
    console.log(i)
}


// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ
// EJ

