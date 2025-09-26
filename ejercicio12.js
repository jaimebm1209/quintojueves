function adivinarNumero() {
  const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
  let intento;
  let intentos = 0;

  while (intento !== numeroAleatorio) {
    intento = parseInt(prompt("Adivina el número entre 1 y 10:"));
    intentos++;
  }

  console.log(`¡Adivinaste! El número era ${numeroAleatorio}. Lo lograste en ${intentos} intentos.`);
}

// Esta función requiere la interacción con el navegador y un `prompt`, por lo que puedes probarla en la consola del navegador.
