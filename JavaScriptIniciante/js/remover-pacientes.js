let pacientes = document.querySelectorAll(".paciente");

let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.classList.add('fadeOut');
  setTimeout(function(){
    event.target.parentNode.remove();
  }, TEMPO_EFEITO_CSS_REMOVE);
});
