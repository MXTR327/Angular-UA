// Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

nombre = 10.5;
console.log(typeof nombre);

// Tipo de dato numerico
var numero = 1000;
console.log(numero);

// Tipo de dato object
var objeto = {
  nombre: "Max",
  apellido: "Perez",
  telefono: "55443322",
};
console.log(typeof objeto);

// Tipo de dato boolean (true, false)
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

// Tipo de dato function
function miFuncion() {}
console.log(typeof miFuncion);

// Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

// Tipo clase es una function
class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

console.log(typeof Persona);

// Tipo de dato undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

// null = aunsencia de valor
var y = null;
console.log(typeof y);

var autos = ["BMW", "Audi", "Volvo"];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log(typeof z);
