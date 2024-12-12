function fondoAzul() {
    let body = document.body
    body.style.backgroundColor = "lightblue"
}

function fondoCustom() {
    let body = document.body
    body.style.backgroundColor = prompt("Dime el color (en ingles)")
}

function colorMasTexto() {
    document.getElementById('titulo').innerText = prompt("Elige texto master");
    titulo.style.color = prompt("Y ahora el color (in inglis)");
}

function eliminar() {
    document.getElementById('p1').remove()
}

function cositas() {
    for (i=1;i<=100;i++) {
        console.log(i)
    }

    for (i=1;i<=100;i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }

    let suma = 0;
    for (i=1;i<=100;i++) {
        if (i % 2 == 0) {
            suma = suma + i
        }
    }
    console.log(suma)

    let suma2 = 0;
    for (i=1;i<=100;i++) {
        suma2 = suma2 + i;
    }
    console.log(suma2)


}