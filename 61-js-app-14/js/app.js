const personas = [
  new Persona("Max", "RQ"),
  new Persona("Ana", "Gomez"),
  new Persona("Luis", "Martinez"),
];
function mostrarPersonas() {
  console.log("Mostrar personas...");
  const texto = personas.reduce((acc, persona) => {
    return acc + `<li>${persona.nombre} ${persona.apellido}</li>`;
  }, "");
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  const formulario = document.forms["formulario"];
  const nombre = formulario["nombre"].value;
  const apellido = formulario["apellido"].value;

  if (nombre === "" || apellido === "") {
    alert("Los campos nombre y apellido son obligatorios");
    return;
  }
  
  const persona = new Persona(nombre, apellido);
  personas.push(persona);
  mostrarPersonas();
}
