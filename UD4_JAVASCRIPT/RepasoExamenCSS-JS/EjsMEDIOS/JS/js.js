// EJ AVANZADOS de JAVASCRIPT

for (i = 1; i <=10; i++) {
    console.log(i)
}

let num = 7;

if (num % 2 == 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

for (i=1;i <=5; i++) {
    console.log(i+(i+1))
}

let num1=1;
while (num1 <= 5) {
    console.log("Hola, Mundo")
    num1 = num1 + 1;
}

for (i=1;i<=10;i++) {
    let operacion = 2 * i;
    console.log("2 X " + i + " son " + operacion)
}

for (i=10;i>=1;i--) {
    console.log(i)
}

/*let numFinal = parseInt(prompt("Dime un Numero: "))
for (i=1; i <= numFinal;i++) {
    console.log(i)
}*/

let suma = 0;
for (i=1; i<=10; i++) {
    if (i % 2 == 0) {
        suma = suma + i;
    }
}
console.log("La suma es " + suma)

/*let edad = parseInt(prompt("Dime tu Edad: "));
if (edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}*/

/*let tabla = parseInt(prompt("Dime el Nº de la tabla: "));
for (i=1;i<=10;i++) {
    let op = tabla * i;
    console.log(tabla + " X " + i + " = " + op )
}*/

for (i=50;i>=40;i--) {
    console.log(i)
}

