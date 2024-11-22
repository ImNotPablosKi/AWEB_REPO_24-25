/* Escribe un script que pida una nota y diga si es sobresaliente, notable... etc */
/*let nota = parseInt(prompt("Escriba una nota:"));*/

/*if (nota >= 9 && nota <= 10) {
    console.log("Enhorabuena! Es un sobresaliente.");
} else if (nota >= 7 && nota < 9) {
    console.log("Es un notable, no está mal");
} else if (nota == 6 && nota < 7 ) {
    console.log("Está Bien, pero puede ser mejor");
} else if (nota == 5) {
    console.log("Suficiente...");
} else if (nota >= 0 && nota < 5) {
    console.log("Suspenso, cateto");
} else {
    console.log("Escribe entre 0 y 10 maestro :D");
}*/

//let resultado = 0;
// let tabla = parseInt(prompt("Que tabla quiere sacar?: "));

/*for (let numero = 1; numero <= 10; numero++) {
    resultado = resultado * numero;
    console.log("El resultado de " + tabla + "x" + numero + " es " + tabla*numero) 
}*/

/*let contador = 0;

while (contador <= 10) {
    console.log(tabla + " x " + contador + " Es igual a " + (tabla*contador))
    contador++
}*/

// Los Array te permiten almacenar valores en variables
let miArray = [0,0,0,0,0,56,0,0,];

console.log(miArray[5])


// Bucle para sumar números de 1 al 5
let contador = 10;
let resultado = 0;

/*while (contador >= 0) {
    console.log("Hola, Mundo!")
    contador - 1
}*/
for (contador = 10; contador >= 0; contador--) {
    console.log(contador);
}

// console.log("La suma es: " + resultado)

/*let contador;

for( contador = 34; contador <= 100; contador++ ){
    if (contador % 3 == 0 ) {
        console.log(contador + " Es múltiplo de 3")
    }
}*/

let num = 0;
function errores() {
    console.error("PASCUAAAAAL" + num);
    num ++;
}

function eldenrim() {
    console.log("Elden Ring (エルデンリング Eruden Ringu?) es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco Entertainment. El videojuego surge de una colaboración entre el director y diseñador Hidetaka Miyazaki y el novelista de fantasía George R. R. Martin. El videojuego se lanzó al mercado a nivel mundial el 25 de febrero de 2022 en las plataformas Xbox One, Xbox Series X/S, Microsoft Windows, PlayStation 4, PlayStation 5.1​2​ La crítica lo elogió por el diseño de su mundo abierto, la jugabilidad y la ambientación, recibiendo algunas críticas por su rendimiento técnico. También, recibió múltiples premios a juego del año, tales como el de los Game Awards de 2022, y alcanzó las 20 millones de unidades vendidas en su primer año. En junio de 2024, se publicó el contenido descargable titulado Shadow of the Erdtree,3​el cual recibió elogios similares de la crítica y vendió más de 5 millones de unidades en la primera semana. " + num )
    num ++;
}

function limpiar() {
    console.clear();
}

