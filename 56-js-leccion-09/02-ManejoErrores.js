"use strict";
let resultado = 1;

try {
  //   x = 10;
  if (isNaN(resultado)) throw "No es un numero";
  else if (resultado === "") throw "Es cadena vacia";
  else if (resultado >= 0) throw "Valor positivo";
  else if (resultado < 0) throw "Valor negativo";
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("Termina la revisión de errores");
}
