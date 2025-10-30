// No es posible crear objetos antes de declarar la clase
// No se aplica el concepto de hoisting
// let persona2 = new Persona("Alan", "García");
class Persona {
  static contadorObjetosPersona = 0; // Atributo estatico de la clase

  email = "Valor default email"; // Atributo de objetos

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    Persona.contadorObjetosPersona++;
    console.log("Se incrementa contador: " + Persona.contadorObjetosPersona);
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
    return this._nombre + " " + this._apellido;
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
// persona1.nombre = "Juan Carlos"; // set nombre("Juan Carlos")
// console.log(persona1.nombre); // get nombre() -> "Juan Carlos"
console.log(persona1);
console.log(persona1.toString());

let empleado1 = new Empleado("María", "López", "Ventas");
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());

// persona1.saludar(); // No se puede invocar statics desde objetos
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);
