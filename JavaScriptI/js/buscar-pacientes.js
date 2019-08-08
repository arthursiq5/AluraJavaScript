let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener('click', function () {

  let xhr = new XMLHttpRequest(); // objeto de requisições em JavaScript

  xhr.open(
           "GET",
           URL_DADOS_EXTERNOS
          );

  xhr.addEventListener('load', function(){

    let erroAjax = document.querySelector("#erro-ajax");

    if ( this.status == STATUS_HTTP_SUCCESS ){

      let pacientes = JSON.parse( this.responseText );
      pacientes.forEach( insereNovoPaciente );
      return;

    }

    erroAjax.classList.remove('invisivel');

  });

  xhr.send();
});
