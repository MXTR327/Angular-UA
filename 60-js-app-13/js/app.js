console.log("App initialized");

function sumar() {
  const formulario = document.getElementById("formulario");
  let operandoA = formulario["operandoA"].value;
  let operandoB = formulario["operandoB"].value;
  let resultado = parseInt(operandoA) + parseInt(operandoB);
  if (isNaN(resultado)) resultado = "La operacion no incluye numeros validos";

  document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;

  console.log(`Resultado: ${resultado}`);
}
