let pacientes = document.querySelectorAll(".paciente");

let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.remove();
});
