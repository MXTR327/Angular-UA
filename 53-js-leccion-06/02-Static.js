// No es posible crear objetos antes de declarar la clase
// No se aplica el concepto de hoisting
// let persona2 = new Persona("Alan", "García");
class Persona {
  static contadorPersona = 0; // Atributo estatico de la clase

  static get MAX_OBJ() {
    return 5;
  }

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersona < Persona.MAX_OBJ)
      this.idPersona = ++Persona.contadorPersona;
    else
      console.log("Se han superado el maximo de objetos permitidos")
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  nombreCompleto() {
    return this.idPersona + " - " + this._nombre + " " + this._apellido;
  }

  // Sobreescribe el metodo de la clase padre (Object)
  toString() {
    // Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
    // El metodo que se ejecuta depende si es una referencia de tipo padre o hijo
    return this.nombreCompleto();
  }

  static saludar() {
    console.log("Saludos desde el metodo static");
  }

  static saludar2(persona) {
    console.log(persona.nombre + " " + persona.apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido); // Llamada al constructor de la clase padre
    this._departamento = departamento;
  }

  get departamento() {
    return this._departamento;
  }

  set departamento(departamento) {
    this._departamento = departamento;
  }

  // Sobreescritura
  nombreCompleto() {
    return super.nombreCompleto() + ", " + this._departamento;
  }
}

let persona1 = new Persona("Juan", "Pérez");
console.log(persona1.toString());

let empleado1 = new Empleado("María", "López", "Ventas");
console.log(empleado1.toString());

console.log(Persona.contadorPersona);

let persona2 = new Persona("Karla", "Ramirez");
console.log(persona2.toString());
console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

let persona3 = new Persona("Laura", "Quintero");
let persona4 = new Persona("Carlos", "Lara");
let persona5 = new Persona("Ana", "Cruz");
