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
function probarValidarCiudad(){
    
    console.assert(
        validarCiudad("") === "El campo Ciudad no puede estar vacio",
        "validarCiudad no mostro un error cuando la ciudad es vacia"
    );

    console.assert(
        validarCiudad('Cordoba') === "",
        "la funcion validarCiudad fallo con un nombre de ciudad valido"
    );
}

probarValidarNombre();
probarValidarCiudad();
