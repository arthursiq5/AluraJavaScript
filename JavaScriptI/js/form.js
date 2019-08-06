let botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function(){
  event.preventDefault(); // evita que o evento padrão seja chamado
  let form = document.querySelector("#form-adiciona");

  // propriedades do paciente
  let paciente = obtemPacienteDoFormulario(form);

  let pacienteTr = montaTr(paciente);

  let tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

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

function montaTr(paciente){
    let pacienteTr = document.createElement('tr');

    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
  let td = document.createElement('td');

  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
