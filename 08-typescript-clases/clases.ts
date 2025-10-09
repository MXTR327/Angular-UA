class Persona {
  private nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  getNombre(): string {
    return this.nombre;
  }

  static metodoStatico(): number {
    return 10;
  }
}

let persona1 = new Persona("Max");
console.log(persona1.getNombre());
console.log(Persona.metodoStatico());
