let pacienteInvalidoClass = "paciente-invalido";
let pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  paciente = pacientes[i];

  let peso = paciente.querySelector(".info-peso").textContent;

  let altura = paciente.querySelector(".info-altura").textContent;

  let mensagem = calculaImc(peso, altura);

  if( (peso <= 0) || (peso >= 1000) ){
    mensagem = "peso inválido";
    paciente.classList.add(pacienteInvalidoClass);
  }

  if((altura <= 0) || (altura >= 3.00)){
    mensagem = "altura inválida";
    paciente.classList.add(pacienteInvalidoClass);
  }

  paciente.querySelector(".info-imc").textContent = mensagem;
}

function calculaImc(peso, altura){
  return (peso / (altura * altura)).toFixed(2);
}