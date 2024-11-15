let numero1 = 10;
const numero2 = 100
// Las variables Constantes NO PUEDEN cambiar de valor.

numero1 = 12;


numero1 = 5;



console.log("El número1 vale: " + numero1);
console.log("El número2 vale: " + numero2);

    // -------- APARTADO 2 ---------- //

let a = 25;
let b = "25";
let c = 5;

let resultado = (a === b)
console.log(resultado)

// console.log( a / b )
// console.log( "El resto es " + a % b )
// Usamos " % " para recoger el resto

// console.log(a == b)
// Es una comparativa, tira "true" o  "false" + poner 3 === pide Igual y Mismo tipo

// a = a + 5;
// console.log( a == 25 );
// Otra comparativa; usa >, <, =, ==, >=, <=.
// Al poner != preguntas un "NO eres igual"

console.log( "// ------- EJERCICIOS -------- //")

// Ejercicio 1
// ------------( Muy fácil, Paso )-----------------------------------


// Ejercicio 2
// -----------------------------------------------

let numero = 5;
let doble = 5 * 2;
let triple = 5 * 3;

console.log("El doble de " + numero + " es " + doble + " y el triple es " + triple)

// Ejercicio 3
// -----------------------------------------------

let celsius = 20;
let farenheit = (celsius * 9/5 ) + 32

console.log( celsius + "º celsius son " + farenheit + "º farenheit")

// Ejercicio 4
// -----------------------------------------------

let dias = 10;

console.log( dias + " dias son " + (dias / 7) + " semanas y " + (dias % 7 ) + " dias." )
// Ejercicio 5
// -----------------------------------------------

let edad1 = 20;
let edad2 = 30;

let esmayor = edad1 > edad2 

if (edad1 < edad2) {
    console.log(edad1 + " es menor que " + edad2)
} else if (edad1 > edad2 ) {
    console.log(edad1 + " es mayor que " + edad2)
} else {
    console.log(edad1 + " es igual que " + edad2)
}

// Ejercicio 6
// -----------------------------------------------

let nota1 = 20;
let nota2 = 30;
let nota3 = 60;

let promedio = (nota1 + nota2 + nota3 ) / 3

console.log("El promedio es " + promedio)

// Ejercicio 7
// -----------------------------------------------

let minutos = 2450;
console.log( "El viaje dura " + (minutos/60) + " Horas y " + (minutos%60) + " minutos")

// Ejercicio 8
// -----------------------------------------------

let largo = 20;
let ancho = 40;

let area = largo * ancho;
let perimetro = 2 * (largo + ancho)

console.log( "El área es " + area + " y el perímetro es " + perimetro)

// Ejercicio 9
// -----------------------------------------------

let precioOriginal = 30;
let descuento = 20;

let descuentoAplicado = (precioOriginal * descuento ) / 100;

let precioFinal = precioOriginal - descuentoAplicado;

console.log("El precio con descuento es " + precioFinal + " €")

// Ejercicio 10 [DESAFÍO :O]
// -----------------------------------------------

let edadActual = 17;
let edadJubilacion = 65;

let anosRestantes = edadJubilacion - edadActual;

let anoDeJubilacion = 2024 + anosRestantes;

console.log("Te jubilarás en " + anoDeJubilacion + ", te quedan " + anosRestantes + " años por delante.")
