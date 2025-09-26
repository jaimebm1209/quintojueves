function primerMultiploDe5(arr) {
  return arr.find(num => num % 5 === 0);
}

// Ejemplo
console.log(primerMultiploDe5([3, 7, 10, 12, 15])); // 10
