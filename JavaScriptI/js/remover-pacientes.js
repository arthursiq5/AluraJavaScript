let pacientes = document.querySelectorAll(".paciente");

let tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
  event.target.parentNode.remove();
});


// pacientes.forEach( function (paciente) {
//
//   paciente.addEventListener('dblclick', function () {
//     this.remove(); // remove o objeto atrelado ao evento
//   });
// });
