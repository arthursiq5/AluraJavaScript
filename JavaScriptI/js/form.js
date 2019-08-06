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
