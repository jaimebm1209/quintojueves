function sumarPositivos(arr) {
  return arr.filter(num => num > 0).reduce((acc, val) => acc + val, 0);
}

// Ejemplo
console.log(sumarPositivos([1, -2, 3, 4, -1])); // 8
