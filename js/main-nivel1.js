

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
function validarDescripcionRegalo(descripcionRegalo){
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

  const isSuccess  = manejarErrores(objErrores) === 0;

  if(isSuccess){
    showWishList();
  }

  event.preventDefault();

}

function showWishList(){
  document.querySelector("#carta-a-santa").className="oculto";
  document.querySelector("#exito").className="";
  setTimeout(function(){location.href="wishlist.html"} , 5000); 
}

function manejarErrores(errores){

  const keys = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  let totalError =0;
  cleanAllErrors();
  keys.forEach(function(key) {
  const error = errores[key];
  
  if(error){
      totalError++;
      $form[key].className = "error";
      const $error = document.createElement("li");
      $error.setAttribute("id",key);
      $error.innerText = error;
      $errores.appendChild($error);

      
  }else{
      $form[key].className= "";
  }
 });

return totalError;

}
function cleanError(idElementoLista){
  
  let ul = document.getElementById("errores");
  let li =document.getElementById('errores').getElementsByTagName('li');
  let totalElementos = document.getElementById('errores').getElementsByTagName('li').length;

  for(i= 0;i < totalElementos  ;i++) {

    if (li[i].id == idElementoLista ){
      ul.removeChild(ul.children[(i)]);
    }
  }
}

function cleanAllErrors(){
  
  let ul = document.getElementById("errores");
  if (ul) {
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild);
  }
  
  } else {
    console.log("el elemento ul NO TIENE cosas");
  }
}


const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;
