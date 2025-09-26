function mayorYMenor(arr) {
  let mayor = arr[0];
  let menor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) mayor = arr[i];
    if (arr[i] < menor) menor = arr[i];
  }

  return { mayor, menor };
}

// Ejemplo
console.log(mayorYMenor([8, 3, 6, 1, 9])); // { mayor: 9, menor: 1 }
