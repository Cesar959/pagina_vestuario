function validarEmail(){
  var email = document.querySelector('#email');
  var mensagem = document.querySelector('#mensagem');
  var input = document.querySelector('input');


  if(!email.checkValidity())
  {
    mensagem.innerHTML = "Email invalido";
    input.style.background = "url('js/icon-error.svg') no-repeat";
    input.style.backgroundPosition = "82% center"; 
  } 
  else
  {
  	mensagem.innerHTML = "Email valido";
  	mensagem.style.color = "#13F547";
    input.style.background = "none";
  }
   
}