import {Bind} from '../helpers/Bind';
import {DateHelper} from '../helpers/DateHelper';

import {Conta} from '../models/Conta';
import {Mensagem} from '../models/Mensagem';
import {Negociacao} from '../models/Negociacao';
import {ListaNegociacoes} from '../models/ListaNegociacoes';

import {MensagemView} from '../views/MensagemView';
import {NegociacoesView} from '../views/NegociacoesView';

import {NegociacaoService} from '../services/NegociacaoService';
/**
 * @namespace app/controllers/NegociacaoController
 */
class NegociacaoController{

  /**
   * @constructs
   */
  constructor(){
    // o símbolo $ agora funciona como um 'alias' para o querySelector
    let $ = document.querySelector.bind(document);
    let self = this;
    this._inputData       = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor      = $('#valor');

    this._listaNegociacoes = new Bind(
                               new ListaNegociacoes(),
                               new NegociacoesView($("#negociacoesView")),
                               'adiciona', 'esvazia', 'ordena', 'inverteOrdem'
                             );

    this._mensagem = new Bind(
                      new Mensagem(),
                      new MensagemView($("#mensagemView")),
                      'texto'
                     );

    this._ordemAtual = '';
    this._negociacaoService = new NegociacaoService();
    this._init();
  }

  /**
   * @access private
   * @description inicializa componentes
   * @return NegociacaoController this
   */
  _init(){
    this._negociacaoService
        .lista()
        .then(negociacoes =>
               negociacoes.forEach(negociacao =>
                 this._listaNegociacoes.adiciona(negociacao)))
        .catch(erro => {
          this._mensagem.texto = erro;
        });

    setInterval(() => {
      this.importaNegociacoes();
    }, 3000);

    return this;
  }

  /**
   * @access public
   * @description salva uma negociação no banco
   * @param event
   * @return NegociacaoController this
   */
  adiciona(event){
    event.preventDefault();

    let negociacao = this._criaNegociacao();
    this._negociacaoService
        .cadastra(negociacao)
        .then((mensagem) => {
          this._listaNegociacoes.adiciona(negociacao);
          this._mensagem.texto = mensagem;
          this._limpaFormulario();
        })
        .catch(erro => this._mensagem.texto = erro);

    return this;
  }

  /**
   * @access public
   * @description apaga negociações do banco
   * @return NegociacaoController this
   */
  apaga(){
    this._negociacaoService
        .apaga()
        .then(mensagem => {
          this._mensagem.texto = mensagem;
          this._listaNegociacoes.esvazia();
        })
        .catch(evento => {
          this._mensagem.texto = "Não foi possível remover as negociações";
          console.log(evento.target.error);
        });
    return this;
  }

  /**
   * @access public
   * @description importa as negociações do banco
   * @return NegociacaoController this
   */
  importaNegociacoes(){
    this._negociacaoService
        .importa(this._listaNegociacoes.negociacoes)
        .then(negociacoes =>
          negociacoes.forEach(negociacao => {
            this._listaNegociacoes.adiciona(negociacao);
            this._mensagem.texto = 'Negociações do período importadas';
        }))
        .catch(erro => this._mensagem.texto = erro);

    return this;
  }

  /**
   * @access public
   * @param String coluna
   * @description ordena as colunas da lista
   * @return this
   */
  ordena(coluna) {

      if(this._ordemAtual == coluna) {
          this._listaNegociacoes.inverteOrdem();
      } else {
          this._listaNegociacoes.ordena((p, s) => p[coluna] - s[coluna]);
      }
      this._ordemAtual = coluna;
      return this;
  }

  /**
   * @description cria uma negociação baseada na NegociacaoFactory
   * @return Negociacao
   */
  _criaNegociacao(){
    let negociacao = new Negociacao(
      DateHelper.textoParaData(this._inputData.value),
      parseFloat(this._inputQuantidade.value),
      parseInt(this._inputValor.value)
    );

    return negociacao;
  }

  /**
   * @access private
   * @description limpa o formulário
   * @return NegociacaoController this
   */
  _limpaFormulario(){
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();

    return this;
  }
}

let negociacaoController = new NegociacaoController();

export function currentInstance(){
  return negociacaoController;
}
