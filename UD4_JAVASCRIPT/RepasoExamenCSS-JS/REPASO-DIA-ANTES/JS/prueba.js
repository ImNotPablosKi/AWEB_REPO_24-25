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

let tabla = parseInt(prompt("Que tabla ermano?:"))
for (i=1;i<=10;i++) {
    let operacion = tabla * i;
    console.log(tabla + " X " + i + " = " + operacion)
}

