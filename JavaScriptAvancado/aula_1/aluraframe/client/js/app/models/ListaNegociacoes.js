/**
 * @namespace app/models/ListaNegociacoes
 */
class ListaNegociacoes{

  constructor(armadilha){
    this._negociacoes = [];
    this._armadilha = armadilha;
  }

  /**
   * @param Negociacao negociacao
   * @return ListaNegociacoes this
   */
  adiciona(negociacao){
    this._negociacoes.push(negociacao);
    this._armadilha(this);
    return this;
  }

  get negociacoes(){
    return [].concat(this._negociacoes);
  }

  esvazia(){
    this._negociacoes = [];
    this._armadilha(this);
    return this;
  }
}
