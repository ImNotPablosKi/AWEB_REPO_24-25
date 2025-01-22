function exito() {
    let cosilla = document.getElementById("buenaEsa");

    if (cosilla.classList.contains("d-none")) {
        cosilla.classList.remove("d-none");
    }
}

function nuh() {

    let cosilla = document.getElementById("malaEsa");

    if (cosilla.classList.contains("d-none")) {
        cosilla.classList.remove("d-none");
    }

}

function cerrarMal() {
    let cosilla = document.getElementById("malaEsa");

    cosilla.classList.add("d-none");
}

function cerrarBien() {
    let cosilla = document.getElementById("buenaEsa");

    cosilla.classList.add("d-none");
}