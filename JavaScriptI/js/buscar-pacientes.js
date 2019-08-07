let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener('click', function () {

  let xhr = new XMLHttpRequest(); // objeto de requisições em JavaScript

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener('load', function(){
    let erroAjax = document.querySelector("#erro-ajax");
    if ( this.status == 200 ){
      let pacientes = JSON.parse(this.responseText);

      erroAjax.classList.add('invisivel');

      pacientes.forEach(insereNovoPaciente);
    }else{
      console.log(xhr.status);
      console.log(xhr.responseText);

      erroAjax.classList.remove('invisivel');
    }
  });
  xhr.send();
});
