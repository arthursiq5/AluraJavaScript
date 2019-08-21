import {NegociacaoController} from './controllers/NegociacaoController';
import {} from './polyfill/fetch/fetch';

let negociacaoController = new NegociacaoController();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('#apaga').onclick = negociacaoController.apaga.bind(negociacaoController);
