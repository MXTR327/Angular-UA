class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    static metodoStatico() {
        return 10;
    }
}
let persona1 = new Persona("Max");
console.log(persona1.getNombre());
console.log(Persona.metodoStatico());
export {};
//# sourceMappingURL=clases.js.map