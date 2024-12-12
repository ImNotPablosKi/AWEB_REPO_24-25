function esPar() {
    let numero = parseInt(prompt("Dime un Número:"))
    if (numero % 2 == 0) {
        alert("Es un numero Par")
    } else {
        alert("Es un numero impar")
    }
}

function esMayor(a,b,c) {
    if (a > b && a > c) {
        alert(a + " Es el mayor numero");
    } else if ( b > a && b > c) {
        alert(b + " Es el mayor numero");
    } else if ( c > a && c > b) {
        alert(c + " Es el mayor numero");
    } else {
        alert("Son numeros iguales");
    }
}

function esPositivo() {
    let numero = parseInt(prompt("Dime un numero: "));
    if (numero == 0) {
        alert("Es un 0")
    } else if (numero > 0) {
        alert("Es Positivo")
    } else {
        alert("Es Negativo")
    }
}

function suma(a,b) {
    alert("La suma de " + a + " + " + b + " es: " + (a+b))
}

function sumar100() {
    let suma = 0;
    for (i=1;i <= 100; i++) {
        suma = suma + i;
    }
    console.log(suma)
}

function repetir() {
    let texto = prompt("Dime algo bro")
    let veces = parseInt(prompt("Cuantas veces lo repito?"))
    console.log(texto.repeat(veces))
}

function sumar100_2(){
    let suma = 0;
    let i = 1;
    while (i<=100) {
        suma = suma +i;
        i++
    }
    console.log(suma)
}