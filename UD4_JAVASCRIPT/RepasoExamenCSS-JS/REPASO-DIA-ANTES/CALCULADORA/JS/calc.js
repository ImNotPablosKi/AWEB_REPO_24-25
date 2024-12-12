function sumar() {
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    let resultado = num1 + num2;
    if ( isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "ERROR!, Introduce un valor acorde"
    } else {
        document.getElementById('resultado').innerText = resultado;
    }
}

function restar() {
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    let resultado = num1 - num2;
    if ( isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "ERROR!, Introduce un valor acorde"
    } else {
        document.getElementById('resultado').innerText = resultado;
    }
}

function mul() {
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    let resultado = num1 * num2;
    if ( isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "ERROR!, Introduce un valor acorde"
    } else {
        document.getElementById('resultado').innerText = resultado;
    }
}

function div() {
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    let resultado = num1 / num2;
    if ( isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "ERROR!, Introduce un valor acorde"
    } else {
        document.getElementById('resultado').innerText = resultado;
    }
}

function modulo() {
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    let resultado = num1 % num2;
    if ( isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "ERROR!, Introduce un valor acorde"
    } else {
        document.getElementById('resultado').innerText = resultado;
    }
}

function sumarArray(array) {
    let suma = 0;
    for (i=1;i< array.length; i ++) {
        suma = suma + array[i];
    }
    console.log(suma)
}
