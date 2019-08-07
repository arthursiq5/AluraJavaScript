let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  console.log(this.value);

  let pacientes = document.querySelectorAll(".paciente");

  if( this.value.length > 0){

    pacientes.forEach( function (paciente) {

      tornaPacienteNaoPesquisadoInvisivel(paciente, campoFiltro.value)

    });
  }else{

    pacientes.forEach( function (paciente) {
      paciente.classList.remove('invisivel');
    });
  }
});

function tornaPacienteNaoPesquisadoInvisivel(paciente, nomePesquisado){
  let tdNome = paciente.querySelector('.info-nome');
  let nome = tdNome.textContent;

  if (nome != nomePesquisado ){
    paciente.classList.add('invisivel');
    return;
  }

  paciente.classList.remove('invisivel');
}
