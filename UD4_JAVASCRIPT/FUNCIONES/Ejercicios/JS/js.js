function ejercicio1() {
    let numero = parseInt(prompt("Tu dame un numero y vemos si es par o impar:"));
    if (esPar(numero))  {
        alert("El numero " + numero + " es Par.")
    } else {
        alert("El numero " + numero + " es Impar.")
    }
}

function esPar(numero){
    if (numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

/////// EJERCICIO 2 ///////

function ejercicio2() {
    let num1 = parseInt(prompt("Dame el primer numero:"));
    let num2 = parseInt(prompt("Dame el segundo numero:"));
    let num3 = parseInt(prompt("Dame el tercer numero:"));

    if (num1 > num2 && num1 > num3) {
        console.log(num1 + " Es el mayor");
    } else if (num2 > num3 && num2 > num1) {
        console.log(num2 + " Es el mayor");
    } else if (num3 > num1 && num3 > num2) {
        console.log(num3 + " Es el mayor");
    } else {
        console.log("Pero que coño has hecho ");
    }

}


/////// EJERCICIO 3 ///////

function ejercicio3() {
    let nota = parseInt(prompt("Dame la Nota del Alumno:"));

    if (nota <= 100 && nota > 90) {
        console.log("El equivalente a " + nota + " es: Sobresaliente");
    } else if (nota <= 90 && nota > 70) {
        console.log("El equivalente a " + nota + " es: Notable");
    } else if (nota <= 70 && nota > 60) {
        console.log("El equivalente a " + nota + " es: Un Bien");
    } else if (nota <= 60 && nota > 50) {
        console.log("El equivalente a " + nota + " es: Suficiente");
    } else if (nota < 50) {
        console.log("El equivalente a " + nota + " es: Suspenso... Cateto");
    } else {
        console.log("Que haces?");
    }
}

/////// EJERCICIO 5 ///////

function ejercicio5() {

    let numero1 = parseInt(prompt("Escoja un numero:"));

    if (numero1 > 0 ) {
        console.log("El " + numero1 + " es un número POSITIVO");
    } else if (numero1 < 0) {
        console.log("El " + numero1 + " es un número NEGATIVO");
    } else {
        console.log("El " + numero1 + " es igual a 0");
    }
}


