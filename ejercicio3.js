function contarPares(arr) {
  let contador = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      contador++;
    }
  }
  return contador;
}

console.log(contarPares([1, 2, 3, 4, 6])); // 3
