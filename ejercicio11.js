function fibonacci() {
  let secuencia = [0, 1];
  for (let i = 2; i < 10; i++) {
    secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
  }
  return secuencia;
}

// Ejemplo
console.log(fibonacci()); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
