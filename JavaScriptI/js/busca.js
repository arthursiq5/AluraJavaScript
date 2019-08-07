let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  console.log(this.value);

  let pacientes = document.querySelectorAll(".paciente");
  pacientes.forEach( function (paciente) {
    let tdNome = paciente.querySelector('.info-nome');
    let nome = tdNome.textContent;
    console.log(nome);
  });
});
