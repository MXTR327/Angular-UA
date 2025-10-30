let persona = {
  nombre: "Juan",
  apellido: "Perez",
  email: "jperez@mail.com",
  edad: 28,
  nombreCompleto: function () {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.nombre);
console.log(persona["apellido"]);

// For in
for (propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}
