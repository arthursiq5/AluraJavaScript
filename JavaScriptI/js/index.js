var titulo = document.querySelector("#titulo");
titulo.textContent = "abacate";

let paciente = document.querySelector("#primeiro-paciente");

let peso = paciente.querySelector(".info-peso").textContent;

let altura = paciente.querySelector(".info-altura").textContent;


paciente.querySelector(".info-imc").textContent = peso / (altura * altura);
