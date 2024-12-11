function cambioDeTitulo() {
    document.getElementById('titulo').innerText = "Bienvenidos a la Página"
}

function colorParrafo() {
    let parrafo = document.getElementById('parrafo')
    parrafo.style.color = 'red'
}

function classChange() {
    let cosa = document.getElementById('cosa')
    cosa.classList.add('inutil')
}

function seleccionPorClase() {
    document.getElementsByClassName("inutil").innerText = "Atiendeeee"
}

function borrar() {
    let borrado = document.getElementById('borrar')
    borrado.remove()
}

function crear() {
    let creado = document.createElement('p')
    creado.innerText = "Atiendeeeee txori q ha llegao el mendaaaa"
    document.body.appendChild(creado)
}