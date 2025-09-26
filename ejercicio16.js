function sumarImpares() {
  let suma = 0;

  for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
      suma += i;
    }
  }

  let resultado = 0;
  let contador = 1;

  while (resultado <= 500) {
    resultado += contador;
    contador += 2; // Solo números impares
  }

  return suma;
}

console.log(sumarImpares()); // 625 (la suma de todos los impares entre 1 y 50)
