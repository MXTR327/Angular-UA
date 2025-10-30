// Funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
  this.nombreCompleto = function () {
    return this.nombre + " " + this.apellido;
  };
}

Persona.prototype.tel = "000-000-0000";

let padre = new Persona("Juan", "Perez", "jperez@mail.com");
padre.tel = "123-456-7890";
console.log(padre.tel);
console.log(padre.nombreCompleto());

let madre = new Persona("Laura", "Quintero", "lquintero@mail.com");
madre.tel = "66880022";
console.log(madre.tel);
console.log(madre.nombreCompleto());
