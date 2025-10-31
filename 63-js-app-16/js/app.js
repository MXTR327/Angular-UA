const ingresos = [
  new Ingreso("Salario", 2100.0),
  new Ingreso("Dividendo", 450.0),
  new Ingreso("Ventas", 600.0),
];

const egresos = [
  new Egreso("Renta departamento", 900),
  new Egreso("Ropa", 400),
];

const cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};

const totalIngresos = () => {
  totalIngreso = ingresos.reduce((acc, ingreso) => acc + ingreso.valor, 0);
  return totalIngreso;
};

const totalEgresos = () => {
  totalEgreso = egresos.reduce((acc, egreso) => acc + egreso.valor, 0);
  return totalEgreso;
};

const cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const eliminarIngreso = (id) => {
  let indiceEliminar = ingresos.findIndex((ingreso) => ingreso.id === id);
  ingresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarIngresos();
};

const eliminarEgreso = (id) => {
  let indiceEliminar = egresos.findIndex((egreso) => egreso.id === id);
  egresos.splice(indiceEliminar, 1);
  cargarCabecero();
  cargarEgresos();
};

const cargarIngresos = () => {
  let ingresosHTML = ingresos.reduce(
    (acc, ingreso) => (acc += crearIngresoHTMl(ingreso)),
    ""
  );
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTMl = (ingreso) => {
  let ingresoHTML = `
  <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn" onclick='eliminarIngreso(${
          ingreso.id
        })'>
          <ion-icon name="close-circle-outline"></ion-icon>
        </button>
      </div>
    </div>
  </div>
  `;

  return ingresoHTML;
};

const cargarEgresos = () => {
  let egresosHTML = egresos.reduce(
    (acc, egreso) => (acc += crearEgresoHTMl(egreso)),
    ""
  );
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crearEgresoHTMl = (egreso) => {
  let egresoHTML = `
  <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
      <div class="elemento_porcentaje">${formatoPorcentaje(
        egreso.valor / totalEgresos()
      )}</div>
      <div class="elemento_eliminar">
          <button class="elemento_eliminar--btn" onclick='eliminarEgreso(${
            egreso.id
          })'>
            <ion-icon name="close-circle-outline"></ion-icon>
          </button>
      </div>
    </div>
  </div>
  `;

  return egresoHTML;
};

let agregarDato = () => {
  let formulario = document.forms["formulario"];
  let tipo = formulario["tipo"];
  let descripcion = formulario["descripcion"];
  let valor = formulario["valor"];
  if (descripcion.value !== "" && valor.value !== "") {
    if (tipo.value === "ingreso") {
      ingresos.push(new Ingreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarIngresos();
    } else if (tipo.value === "egreso") {
      egresos.push(new Egreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarEgresos();
    }
  }
};
