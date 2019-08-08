let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener('click', function () {

  let xhr = new XMLHttpRequest(); // objeto de requisições em JavaScript

  xhr.open(
           "GET",
           "https://api-pacientes.herokuapp.com/pacientes"
          );

  xhr.addEventListener('load', function(){

    let erroAjax = document.querySelector("#erro-ajax");

    if ( this.status == 200 ){

      let pacientes = JSON.parse( this.responseText );
      pacientes.forEach( insereNovoPaciente );
      return;

    }

    erroAjax.classList.remove('invisivel');

  });

  xhr.send();
});
