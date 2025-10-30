let miPromesa = new Promise((resolve, reject) => {
  let expresion = true;
  if (expresion) {
    resolve("Resolvio Correctamente");
  } else {
    reject("Se produjo un error");
  }
});

// miPromesa.then(
//   (valor) => console.log(valor),
//   (error) => console.log(error)
// );

// miPromesa
//   .then((valor) => console.log(valor))
//   .catch((error) => console.log(error));

let promesa = new Promise((resolve) => {
  // console.log("Inicio promesa");
  setTimeout(() => resolve("Saludo con promesa y timeout"), 3000);
  // console.log("Fin promesa");
});

// promesa.then((valor) => console.log(valor));
// async indica que una funcion regresa una promesa
async function miFunctionConPromesa() {
  return "saludos con promesa y async";
}

// miFunctionConPromesa().then((valor) => console.log(valor));

// async / await
async function funcionConAsyncAwait() {
  let miPromesa = new Promise((resolve) => {
    resolve("Promesa con async y await");
  });

  console.log(await miPromesa);
}

// funcionConAsyncAwait();

// promesas, await, async y setTimeout
async function funcionConPromesaAwaitTimeout() {
  console.log("Inicio de funcion");
  let miPromesa = new Promise((resolver) => {
    setTimeout(() => resolver("Promesa con await y timeout"), 3000);
  });
  console.log(await miPromesa);
  console.log("Fin de funcion");
}

funcionConPromesaAwaitTimeout();
