var titulo = document.querySelector("#titulo");
titulo.textContent = "abacate";

let paciente = document.querySelector("#primeiro-paciente");

let peso = paciente.querySelector(".info-peso").textContent;

let altura = paciente.querySelector(".info-altura").textContent;

if((peso < 0) || (peso > 1000)){
  console.log("peso inválido");
}

if((altura < 0) || (altura > 3.00)){
  console.log("altura inválida");
}

paciente.querySelector(".info-imc").textContent = peso / (altura * altura);
