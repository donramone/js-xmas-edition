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
      validarNombre("123456789")==="El campo nombre solo acepta letras",
      "la funcion validarNombre no valido que el campo solo contega letras."
    );
  
    console.assert(
        validarNombre("Luigi")==="",
        "la funcion validarNombre fallo con un nombre valido."
    );
  
  }
function probarValidarCiudad(){
    
    console.assert(
        validarCiudad("") === "El campo ciudad no puede estar vacio",
        "validarCiudad no mostro un error cuando la ciudad es vacia"
    );

    console.assert(
        validarCiudad('Cordoba') === "",
        "la funcion validarCiudad fallo con un nombre de ciudad valido"
    );
}

function probarValidarDescipcionRegalo(){
    console.assert(
        validarDescripcionRegalo("")==="El campo descripcion regalo no puede estar vacio",
        "validarDescripcionRegalo no mostro un error cuando la descripcion de regalo es vacia"
    );

    console.assert(
        validarDescripcionRegalo("zxsdiqqtkksjdksjdsdkjslkdjskldjsluigiksjdksjdsdkjslkdjskldjsluigiksjdksjdsdkjslkdjskldjsluigiksjdksjdsdkjslkdjskldjsluigiksjdksjdsdkjslkdjskldjsluigiksjdksjdsdkjslkdjskldjluigiksjdksjdsdkjslkdjskldjsluigiksjdksjdsdkjslkdjskldjss")==="El campo descripcion regalo no puede tener mas de 100 caracteres",
        "La funcion validarDescripcionRegalo no valido que el campo descripcion tenga menos de 100 caracteres"
    );

    console.assert(
        validarDescripcionRegalo(".,.,.,")==="El campo descripcion regalo solo puede tener caracteres y numeros",
        "La funcion validarDescripcionRegalo no valido que fueran caracteres invalidos."
    );

    console.assert(
        validarDescripcionRegalo("bonito")==="",
        "la funcion validarDescripcionRegalo no funciono con una descripcion correcta."
    );


}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescipcionRegalo();
