function cambiarParrafo() {

    // Cambiamos el texto con un Prompt...
    document.getElementById('parrafo').innerText = prompt("Dime algo tio:")
}

function cambiarParrafo2() {

    // Cambiamos el texto con un Prompt...
    document.getElementById('parrafo2').innerText = prompt("Dime algo tio:")
}

function cambiarFondo(color) {

    let cosa = document.body;

    cosa.style.background = color;
}