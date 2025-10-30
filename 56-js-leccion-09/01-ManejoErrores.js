"use strict";

try {
  let x = 10;
  // miFuncion();
  throw "mi Error"
} catch (error) {
  console.log(error);
} finally {
  console.log("Termina la revisión de errores");
}

console.log("Continuamos...");
