

function validarNombre(nombre) {

    if (nombre.length === 0) {
  
      return "El campo nombre debe tener al menos 1 caracter";
  
    }
  
    if (nombre.length >= 50) {
  
      return "El campo nombre debe tener menos de 50 caracteres";
  
    }
  
    if (!/^[a-z]+$/i.test(nombre)) {
  
      return "El campo nombre sólo acepta letras";
  
    }
  
    return "";
  
  }

function validarCiudad(ciudad) {

    if (ciudad.length === 0) {
  
        return "El campo ciudad no puede estar vacío";
  
    }
    
    return "";
  
  }
