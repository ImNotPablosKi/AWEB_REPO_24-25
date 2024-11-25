function saludar(){
    console.log("HOLAAAAA :D")
}

function sumar(){
    let num1 = 6;
    let num2 = 3;
    let res = num1 + num2;
    console.log(res)
}

function elden(){
    console.log("Elden Ring (エルデンリング Eruden Ringu?) es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. El videojuego surge de una colaboración entre el director y diseñador Hidetaka Miyazaki y el novelista de fantasía George R. R. Martin. El videojuego se lanzó al mercado a nivel mundial el 25 de febrero de 2022 en las plataformas Xbox One, Xbox Series X/S, Microsoft Windows, PlayStation 4, PlayStation 5.1​2​ La crítica lo elogió por el diseño de su mundo abierto, la jugabilidad y la ambientación, recibiendo algunas críticas por su rendimiento técnico. También, recibió múltiples premios a juego del año, tales como el de los Game Awards de 2022, y alcanzó las 20 millones de unidades vendidas en su primer año. En junio de 2024, se publicó el contenido descargable titulado Shadow of the Erdtree,3​el cual recibió elogios similares de la crítica y vendió más de 5 millones de unidades en la primera semana. ")
}

function limpiar(){
    console.clear();
}


function saludoALERTA(){
    alert("HOLA DAM jaj")
}

let respuesta = prompt("saludar o elden???");

if (respuesta == "saludar")  {
    saludar();
} else {
    elden();
}

 console.log("// -------------- SIGUIENTE ----------------- //")

 // ------------------ //

 // Funciones con parámetros

function saludar2( nombre ){
    console.log("Hola " + nombre + "!!!")
}

saludar2("Pablo")


