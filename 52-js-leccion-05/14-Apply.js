let persona1 = {
  nombre: "Juan",
  apellido: "Perez",
  nombreCompleto: function (titulo, tel) {
    return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
  },
};

let pesona2 = {
  nombre: "Carlos",
  apellido: "Lara",
};

// Usamos call para llamar a nombreCompleto con el contexto de pesona2
console.log(persona1.nombreCompleto("Lic", "555-1234"));

let arreglo = ["Ing", "555-5678"];
console.log(persona1.nombreCompleto.apply(pesona2, arreglo));
