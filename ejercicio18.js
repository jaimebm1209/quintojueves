function sumarHastaCero() {
  let suma = 0;
  let numero;

  while (numero !== 0) {
    numero = parseInt(prompt("Ingresa un número (0 para terminar):"));
    suma += numero;
  }

  console.log("La suma total es: " + suma);
}

// Esta función pide números y los suma, terminando cuando se ingresa 0.
