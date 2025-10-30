class Empleado {
  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }

  obtenerDetalles() {
    return `Empleado: ${this.nombre}, Sueldo: ${this.sueldo}`;
  }
}

class Gerente extends Empleado {
  constructor(nombre, sueldo, departamento) {
    super(nombre, sueldo);
    this.departamento = departamento;
  }

  obtenerDetalles() {
    return `${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
  }
}

function determinarTipo(tipo) {
  console.log(tipo.obtenerDetalles());
  if (tipo instanceof Gerente) console.log("Es una instancia de Gerente");
  else if (tipo instanceof Empleado) console.log("Es una instancia de Empleado");
  else if (tipo instanceof Object) console.log("Es una instancia de Object");
}

let empleado1 = new Empleado("Juan", 3000);
let gerente1 = new Gerente("Ana", 5000, "Ventas");

determinarTipo(empleado1);
determinarTipo(gerente1);
