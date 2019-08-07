let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener('click', function () {

  let xhr = new XMLHttpRequest(); // objeto de requisições em JavaScript

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacie1ntes");

  xhr.addEventListener('load', function(){
    if ( this.status == 200 ){
      let pacientes = JSON.parse(this.responseText);

      pacientes.forEach(insereNovoPaciente);
    }else{
      console.log(xhr.status);
      console.log(xhr.responseText);
      let erroAjax = document.querySelector("#erro-ajax");
      erroAjax.classList.remove('invisivel');
    }
  });
  xhr.send();
});
