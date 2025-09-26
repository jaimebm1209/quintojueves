function mostrarMenu() {
  let opcion;

  do {
    opcion = parseInt(prompt("Elige una opción:\n1. Opción 1\n2. Opción 2\n3. Salir"));
    
    switch(opcion) {
      case 1:
        console.log("Has elegido la opción 1.");
        break;
      case 2:
        console.log("Has elegido la opción 2.");
        break;
      case 3:
        console.log("¡Saliendo!");
        break;
      default:
        console.log("Opción no válida.");
    }
  } while (opcion !== 3);
}

// Esta función muestra un menú interactivo en el navegador, con un `prompt` que permite elegir una opción.
