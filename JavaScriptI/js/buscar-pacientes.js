let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener('click', function () {

  let xhr = new XMLHttpRequest(); // objeto de requisições em JavaScript

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacie1ntes");

  xhr.addEventListener('load', function(){
<<<<<<< HEAD
    let erroAjax = document.querySelector("#erro-ajax");
    if ( this.status == 200 ){
      let pacientes = JSON.parse(this.responseText);

      erroAjax.classList.add('invisivel');

=======
    if ( this.status == 200 ){
      let pacientes = JSON.parse(this.responseText);

>>>>>>> 81ee98cf88863e4f8c15eaa9731b0e5dc112c347
      pacientes.forEach(insereNovoPaciente);
    }else{
      console.log(xhr.status);
      console.log(xhr.responseText);
<<<<<<< HEAD

=======
      let erroAjax = document.querySelector("#erro-ajax");
>>>>>>> 81ee98cf88863e4f8c15eaa9731b0e5dc112c347
      erroAjax.classList.remove('invisivel');
    }
  });
  xhr.send();
});
