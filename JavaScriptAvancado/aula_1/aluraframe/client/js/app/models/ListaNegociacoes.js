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
    return [].concat(this._negociacoes);
  }

  esvazia(){
    this._negociacoes = [];
    return this;
  }

  volumeTotal(){
    return this._negociacoes.reduce(
        (total, negociacao) => total + negociacao.volume,
        0.0)
  }
}
