function sumar() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let resultado = num1 + num2
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "ERROR, Introduce algo bien tio"
    } else {
        document.getElementById('resultado').innerText = resultado
    }   
}

function restar() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let resultado = num1 - num2
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "ERROR, Introduce algo bien tio"
    } else {
        document.getElementById('resultado').innerText = resultado
    }   
}

function mul() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let resultado = num1 * num2
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "ERROR, Introduce algo bien tio"
    } else {
        document.getElementById('resultado').innerText = resultado
    }   
}

function div() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let resultado = num1 / num2
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "ERROR, Introduce algo bien tio"
    } else {
        document.getElementById('resultado').innerText = resultado
    }   
}

function mod() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let resultado = num1 % num2
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').innerText = "ERROR, Introduce algo bien tio"
    } else {
        document.getElementById('resultado').innerText = resultado
    }   
}


let i = 0;
function arrayColor() {
    let array = ["red","blue","green"]
    if (i<array.length) {
        document.body.style.backgroundColor = array[i];
        i++
    }
    if (i == array.length) {
        i=0;
    }
}

function repetir(){
    let cosa = prompt("Dime algo ermano");
    let veces = parseInt(prompt("Cuanto lo repito?"))
    alert(cosa.repeat(veces))
}
