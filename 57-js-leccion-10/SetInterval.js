let reloj = () => {
  let fecha = new Date();
  console.log(
    `Hora Actual: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`
  );
};

setInterval(reloj, 1000); // Cada 1 segundo
