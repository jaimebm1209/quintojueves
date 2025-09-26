function fibonacciHastaCien() {
  let a = 0, b = 1;
  while (b <= 100) {
    console.log(b);
    let temp = b;
    b = a + b;
    a = temp;
  }
}

// Ejemplo
fibonacciHastaCien(); // Imprime la secuencia hasta el primer número mayor que 100
