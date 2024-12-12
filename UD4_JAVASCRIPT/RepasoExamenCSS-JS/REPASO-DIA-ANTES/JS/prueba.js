function cambioTexto() {
    document.getElementById('texto').innerText = prompt("Que quieres poner?");
}

function rojo() {
    let body = document.body
    body.style.background = 'red'
}

function azul() {
    let body = document.body;
    body.style.background = 'lightblue'
}

function titulo() {
    let titulo = document.getElementById('titulo');
    titulo.style.color = prompt("Que color quieres? (en inglés)")
}

function crear() {
    let parrafo = document.createElement("p");
    parrafo.textContent = "Atiendeee";
    document.body.appendChild(parrafo)
}

function tablaPersonalizada() {
    let tabla = parseInt(prompt("Que tabla ermano?:"))
    for (i=1;i<=10;i++) {
        let operacion = tabla * i;
        console.log(tabla + " X " + i + " = " + operacion)
    }
}

/////////////////// OTRAS COSAS ///////////////////////

function cosasBasicas() {
    /*let cadena = prompt("Dime algo jefe:");
    let veces = parseInt(prompt("Cuanto lo repito?:"));
    console.log(cadena.repeat(veces))*/
    let suma = 0;
    for (i=1;i<=100; i++) {
        if (i % 2 == 0) {
            suma = suma + i
        }
    }
    console.log("La suma de los primeros nºs pares hasta 100 es: " + suma)

    let suma2 = 0;
    for (i=1;i<=100;i++) {
        suma2 = suma2 + i;
    }
    console.log("La suma de los Nºs de 1 a 100 es: " + suma2)

    /*let numPar = parseInt(prompt("Dime un numero, Si es par saldrá true:"))
    if (numPar % 2 == 0) {
        return true;
    } else {
        return false;
    }*/

    let tabla = parseInt(prompt("Que tabla quieres sacar por consola?:"))
    for (i=1;i<=10;i++) {
        let operacion = tabla * i;
        console.log(tabla + " X " + i + " = " + operacion)
    }
}

function coloryTitulo() {
    document.getElementById('titulo2').innerText = prompt("Elige tú maestro: ");
    titulo2.style.color = prompt("Elige color (in inglish plis)")
}

function cambiarFondo() {
    let body = document.body
    body.style.backgroundColor = prompt("Color? En INGLES (^^)")
}

function parrafoNuevo() {
    let parrafada = document.createElement("p")
    parrafada.textContent = "cock ring"
    document.body.appendChild(parrafada)
}


