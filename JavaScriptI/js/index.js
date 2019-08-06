let pacienteInvalidoClass = "paciente-invalido";
let pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  paciente = pacientes[i];

  let peso = paciente.querySelector(".info-peso").textContent;

  let altura = paciente.querySelector(".info-altura").textContent;

  let mensagem = (peso / (altura * altura)).toFixed(2);

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

let botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(){
  event.preventDefault(); // evita que o evento padrão seja chamado
  let form = document.querySelector("#form-adiciona");

  // propriedades do paciente
  let nome    = form.nome.value;
  let peso    = form.altura.value;
  let altura  = form.peso.value;
  let gordura = form.gordura.value;

  let newPacienteTr = document.createElement('tr');

  let nomeTd    = document.createElement('td');
  let pesoTd    = document.createElement('td');
  let alturaTd  = document.createElement('td');
  let gorduraTd = document.createElement('td');
  let imcTd     = document.createElement('td');

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;
  imcTd.textContent = 0;

  newPacienteTr.appendChild(nomeTd);
  newPacienteTr.appendChild(pesoTd);
  newPacienteTr.appendChild(alturaTd);
  newPacienteTr.appendChild(gorduraTd);
  newPacienteTr.appendChild(imcTd);

  let tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(newPacienteTr);
});
