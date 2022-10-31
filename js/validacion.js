const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  numero: /^[0-9]{1,2}$/
}

const validarFormulario = (e) => {
  switch (e.target.name){
    case "nombre":
      validarCampo(expresiones.nombre, e.target, 'nombre');
    break;
    case "apellido":
      validarCampo(expresiones.nombre, e.target, 'apellido');
    break;
    case "cant":
      validarCampo(expresiones.numero, e.target, 'cant');
    break;
    case "email":
      validarCampo(expresiones.correo, e.target, 'email');
    break;
  }
}

const validarCampo = (expresion, input, campo) => {
  if(expresion.test(input.value)){
    document.getElementById(`${campo}`).classList.remove('input-incorrecto');
    document.getElementById(`${campo}`).classList.add('input-correcto');
    document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove('form__input-error-active');
  } else{
    document.getElementById(`${campo}`).classList.add('input-incorrecto');
    document.getElementById(`${campo}`).classList.remove('input-correcto');
    document.querySelector(`#grupo__${campo} .form__input-error`).classList.add('form__input-error-active');
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) =>{
  e.preventDefault();
})