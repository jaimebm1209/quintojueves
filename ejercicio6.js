function invertirArray(arr) {
  let invertido = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    invertido.push(arr[i]);
  }
  return invertido;
}

// Ejemplo
console.log(invertirArray([1, 2, 3, 4])); // [4, 3, 2, 1]
