let campos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor')
];

console.log(campos);

let tbody = document.querySelector('table tbody');

document.querySelector('.form')
        .addEventListener('submit', eventInsercaoDosDadosNaTabela);

function criacaoDosTdLigadosAUmaTr(valor, tr){
  let td = document.createElement('td');
  td.textContent = valor;
  tr.appendChild(td);
}

function eventInsercaoDosDadosNaTabela(event){

  event.preventDefault();

  let tr = document.createElement('tr');

  campos.forEach( function (campo) {

    criacaoDosTdLigadosAUmaTr(campo.value, tr);

  });
  let volume = (campos[1].value * campos[2].value);
  criacaoDosTdLigadosAUmaTr(volume, tr);

  tbody.appendChild(tr);

  campos[0].value = "";
  campos[1].value = 1;
  campos[2].value = 0;
  campos[0].focus();
}
