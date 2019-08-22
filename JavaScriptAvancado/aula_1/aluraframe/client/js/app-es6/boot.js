import {currentInstance} from './controllers/NegociacaoController';
import {} from './polyfill/fetch/fetch';

let negociacaoController = currentInstance();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('#apaga').onclick = negociacaoController.apaga.bind(negociacaoController);
