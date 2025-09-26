function pedirNumero() {
  let numero;

  do {
    numero = parseInt(prompt("Ingresa un número mayor que 0:"));
  } while (numero <= 0 || isNaN(numero));

  console.log(`El número ingresado es: ${numero}`);
}

// La función usa `do while` para pedir un número hasta que sea mayor que 0 y válido. Puedes probarla en un navegador.
