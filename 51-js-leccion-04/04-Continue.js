inicio: for (let contador = 0; contador <= 10; contador++) {
  if (contador % 2 !== 0) {
    console.log(contador);
    continue inicio;
  } else {
    console.log(contador);
  }
}
