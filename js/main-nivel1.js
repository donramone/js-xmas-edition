

function validarNombre(nombre) {

    if (nombre.length === 0) {
  
      return "El campo nombre debe tener al menos 1 caracter";
  
    }
  
    if (nombre.length >= 50) {
  
      return "El campo nombre debe tener menos de 50 caracteres";
  
    }
  
    if (!/^[a-z]+$/i.test(nombre)) {
  
      return "El campo nombre solo acepta letras";
  
    }
  
    return "";
  
  }

function validarCiudad(ciudad) {

    if (ciudad.length === 0) {
  
        return "El campo ciudad no puede estar vacio";
  
    }
    
    return "";
  
  }
function validarDescripcionRegalo(Descripcionregalo){
  if (Descripcionregalo.length ===0) {
    return "El campo descripcion regalo no puede estar vacio";
  }

  if (Descripcionregalo.length >=100) {
      return "El campo descripcion regalo no puede tener mas de 100 caracteres";
  }
  if(!/^[a-z0-9]+$/i.test(Descripcionregalo)){
      return "El campo descripcion regalo solo puede tener caracteres y numeros";
  }
  return "";
}

function validarFormulario(event){
  const $form = document.querySelector("#carta-a-santa");
  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form['descripcion-regalo'].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const objErrores = {
      nombre:errorNombre,
      ciudad:errorCiudad,
      'descripcion-regalo':errorDescripcionRegalo

  };
  
  manejarErrores(objErrores);
  event.preventDefault();

}

function manejarErrores(errores){

 const keys = Object.keys(errores);
 
 keys.forEach(function(key) {
    const error = errores[key];
  
  if(error){
      $form[key].className = "error";
  }else{
      $form[key].className= "";
  }

 });


}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;