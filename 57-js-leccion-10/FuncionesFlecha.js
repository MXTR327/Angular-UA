let miFuncion = function () {
  console.log("Saludos desde mi funcion");
};

// const miFuncionFlecha = () => {
//   console.log("Saludos desde mi funcion flecha");
// };

// const miFuncionFlecha = () => console.log("Saludos desde mi funcion flecha");

// miFuncionFlecha();

// const saludar = () => {
//   return "Saludos desde funcion flecha";
// };

const saludar = () => "Saludos desde funcion flecha";

console.log(saludar());

const regresaObjeto = () => ({ nombre: "Juan", apellido: "Perez" });
console.log(regresaObjeto());

const funcionConParametrosClasico = function (mensaje) {
  console.log(mensaje);
};

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros("Saludos con parametros");

const funcionConVariosParametros = (op1, op2) => `Resultado: ${op1 + op2}`;
console.log(funcionConVariosParametros(3, 7));

