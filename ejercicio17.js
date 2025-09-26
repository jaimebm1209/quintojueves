function intentoLogin() {
  let intentos = 0;
  let maxIntentos = 3;
  let usuarioCorrecto = "usuario123";
  let contrasenaCorrecta = "contrasena";

  while (intentos < maxIntentos) {
    let usuario = prompt("Ingresa tu usuario:");
    let contrasena = prompt("Ingresa tu contraseña:");

    if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
      console.log("¡Login exitoso!");
      break;
    } else {
      intentos++;
      console.log(`Intento fallido ${intentos} de ${maxIntentos}`);
    }

    if (intentos === maxIntentos) {
      console.log("Has superado el número de intentos.");
    }
  }
}

// Esta función es interactiva y puede probarse en un navegador con `prompt` y `console.log`.
