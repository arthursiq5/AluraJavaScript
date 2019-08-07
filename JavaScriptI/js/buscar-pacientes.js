let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener('click', function () {
  console.log('buscando pacientes...');

  let xhr = new XMLHttpRequest(); // objeto de requisições em JavaScript

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
  xhr.addEventListener('load', function(){
    let resposta = this.responseText;
    let pacientes = JSON.parse(resposta);

    // console.log(pacientes);
    pacientes.forEach( function (paciente) {
      insereNovoPaciente(paciente)
    });
  });
  xhr.send();
});
