function sumar() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let resultado = (num1 + num2);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "Introduce un valor Valido"
    } else {
        document.getElementById('resultado').innerText = resultado;
    }
}

function restar() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let resultado = (num1 - num2);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "Introduce un valor Valido"
    } else {
        document.getElementById('resultado').innerText = resultado;
    }
}

function mult() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let resultado = (num1 * num2);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "Introduce un valor Valido"
    } else {
        document.getElementById('resultado').innerText = resultado;
    }
}

function div() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let resultado = (num1 / num2);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "Introduce un valor Valido"
    } else {
        document.getElementById('resultado').innerText = resultado;
    }
}

function mod() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    let resultado = (num1 % num2);
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "Introduce un valor Valido"
    } else {
        document.getElementById('resultado').innerText = resultado;
    }
}