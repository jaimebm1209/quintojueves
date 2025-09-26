function sumarArray(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

console.log(sumarArray([1, 2, 3, 4])); 
