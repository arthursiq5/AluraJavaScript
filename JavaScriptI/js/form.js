let botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(){
  event.preventDefault(); // evita que o evento padrão seja chamado
  let form = document.querySelector("#form-adiciona");

  // propriedades do paciente
  let paciente = obtemPacienteDoFormulario(form);

  let erros = validaPaciente(paciente);

  exibeMensagensDeErro(erros);
  if (erros.length > 0) return;

  insereNovoPaciente(paciente);

  form.reset();
});

function obtemPacienteDoFormulario(form){
  // objeto contendo todos os dados do paciente
  let paciente = {
    nome:    form.nome.value,
    peso:    form.peso.value,
    altura:  form.altura.value,
    gordura: form.gordura.value,
    imc:     calculaImc(
               form.peso.value,
               form.altura.value
             )
  }

  return paciente;
}

function montaTrPaciente(paciente){
    let pacienteTr = document.createElement('tr');

    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function insereNovoPaciente (paciente){
  let pacienteTr = montaTrPaciente(paciente);

  let tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
}

function montaTd(dado, classe){
  let td = document.createElement('td');

  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaGordura(gordura){
  return ((gordura >= 0) && (gordura <= 100));
}

function validaCampoNulo(campo){
  if ((campo == "") || (campo == null)) {
    return false;
  }
  return true;
}

function validaPaciente(paciente) {
  let erros = [];

  if (!validaPeso(paciente.peso))
    erros.push("Peso inválido");

  if (!validaGordura(paciente.gordura))
    erros.push("Porcentagem de gordura inválida");

  if (!validaAltura(paciente.altura))
    erros.push("Altura inválida");

  if (!validaCampoNulo(paciente.nome))
    erros.push("Nome não pode ser nulo");

  if (!validaCampoNulo(paciente.peso))
    erros.push("Peso não pode ser nulo");

  if (!validaCampoNulo(paciente.altura))
    erros.push("Altura não pode ser nula");

  if(!validaCampoNulo(paciente.gordura))
    erros.push("Gordura não pode ser nula");

  return erros;
}

function exibeMensagensDeErro(erros){
  let ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach( function (erro) {
    let li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  });
}
