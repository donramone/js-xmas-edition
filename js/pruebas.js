function probarValidarNombre() {
    console.assert(
        validarNombre('') === "El campo nombre debe tener al menos 1 caracter",
        'Validar nombre no validó que el nombre no sea vacío'
    );
  
    console.assert(
      validarNombre(
            "123456789123456789123456789123456789123456789123456789123456789123456789") ==="El campo nombre debe tener menos de 50 caracteres",
            "Validar nombre no validó que el campo nombre tenga menos de 50 caracteres"
    );
  
    console.assert(
      validarNombre("123456789")==="El campo nombres solo acepta letras",
      "la funcion validarNombre no valido que el campo solo contega letras."
    );
  
    console.assert(
        validarNombre("Luigi")==="",
        "la funcion validarNombre fallo con un nombre valido."
    );
  
  }

  probarValidarNombre();
