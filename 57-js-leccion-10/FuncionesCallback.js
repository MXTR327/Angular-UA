function miFuncion1() {
  console.log("funcion 1");
}

function miFuncion2() {
  console.log("funcion 2");
}

// Funcion de tipo callback
function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
  let resultado = op1 + op2;
  funcionCallback(`El resultado de la suma es: ${resultado}`);
}

sumar(5, 7, imprimir);

// LLamadas asincronas con setTimeout
function miFuncionCallback() {
  console.log("Saludo asincrono despues de 3 segundos");
}

setTimeout(miFuncionCallback, 3000); // Despues de 3 segundos
setTimeout(function () {
  console.log("Saludo asincrono con funcion anonima despues de 5 segundos");
}, 5000); // Despues de 5 segundos
setTimeout(() => console.log("Saludo asincrono despues de 3 segundos"), 3000); // Despues de 3 segundos

