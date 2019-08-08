let pacienteInvalidoClass = "paciente-invalido";

insereImcCorretoNaTabela(pacienteInvalidoClass)

function insereImcCorretoNaTabela(pacienteInvalido){

  let pacientes = document.querySelectorAll(".paciente");

  pacientes.forEach( validaEInsereImc );

}

function validaEInsereImc(paciente){

  let peso = paciente.querySelector(".info-peso").textContent;

  let altura = paciente.querySelector(".info-altura").textContent;

  let mensagem = validaImc(peso, altura, paciente);

  paciente.querySelector(".info-imc").textContent = mensagem;

}

function validaImc(peso, altura, paciente){
  let mensagem = calculaImc(peso, altura);

  if(!validaPeso(peso)){

    mensagem = "peso inválido";
    paciente.classList.add(pacienteInvalidoClass);

  }

  if(!validaAltura(altura)){

    mensagem = "altura inválida";
    paciente.classList.add(pacienteInvalidoClass);

  }

  return mensagem;

}

function validaPeso(peso){
  return ((peso >= PESO_MINIMO) && (peso < PESO_MAXIMO));
}

function validaAltura(altura){
  return ((altura > ALTURA_MINIMA) && (altura < ALTURA_MAXIMA));
}

function calculaImc(peso, altura){
  return (peso / (altura * altura)).toFixed(2);
}
