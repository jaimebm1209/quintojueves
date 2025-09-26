function buscarElemento(arr, nombre) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === nombre) {
      return i; // Retorna la posición
    }
  }
  return -1; // Si no lo encuentra
}

// Ejemplo
console.log(buscarElemento(["Ana", "Luis", "Pedro"], "Luis")); // 1
console.log(buscarElemento(["Ana", "Luis", "Pedro"], "Carlos")); // -1
