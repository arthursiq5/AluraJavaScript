/**
 * @namespace app/models/ListaNegociacoes
 */
class ListaNegociacoes{

  constructor(){
    this._negociacoes = [];
  }

  /**
   * @param Negociacao negociacao
   * @return ListaNegociacoes this
   */
  adiciona(negociacao){
    this._negociacoes.push(negociacao);
    return this;
  }

  get negociacoes(){
    return this._negociacoes;
  }

}
