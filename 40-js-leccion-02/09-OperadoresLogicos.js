// Ejemplo AND (&&), regresa true solo si ambos operandos son true
let a = -1;
let valMin = 0,
  valMax = 10;

if (a >= valMin && a <= valMax) {
  console.log("Dentro del rango");
} else {
  console.log("Fuera del rango");
}

// Ejemplo OR (||), regresa true si cualquiera de los operandos es true
let vacaciones = false,
  diaDescanso = false;
if (vacaciones || diaDescanso) {
  console.log("Padre puede asistir al juego del hijo");
} else {
  console.log("El padre está ocupado");
}

// Ejemplo NOT (!), invierte el valor booleano
let resultado = false;
console.log(!resultado);
