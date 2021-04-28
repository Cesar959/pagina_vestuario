function validarEmail()
{
  
  var email = document.querySelector('#email');
  var mensagem = document.querySelector('#mensagem');
  var input = document.querySelector('input');

  var email_verificao = document.querySelector('#email').value;

  if (email_verificao == "" || email_verificao == null) 
  {
    mensagem.innerHTML = "Campo email é obrigatorio!";
    mensagem.style.color = "red";

  }
  else if(!email.checkValidity())
  {
    mensagem.innerHTML = "Email invalido";
    mensagem.style.color = "red";
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