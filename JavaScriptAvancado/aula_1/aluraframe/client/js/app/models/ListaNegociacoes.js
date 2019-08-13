/**
 * @namespace app/models/ListaNegociacoes
 */
class ListaNegociacoes{

  constructor(contexto, armadilha){
    this._negociacoes = [];
    this._armadilha = armadilha;
    this._contexto = contexto;
  }

  /**
   * @param Negociacao negociacao
   * @return ListaNegociacoes this
   */
  adiciona(negociacao){
    this._negociacoes.push(negociacao);
    // classe Reflect executa função com outro contexto
    Reflect.apply(this._armadilha, this._contexto, [this]);
    return this;
  }

  get negociacoes(){
    return [].concat(this._negociacoes);
  }

  esvazia(){
    this._negociacoes = [];
    Reflect.apply(this._armadilha, this._contexto, [this]);
    return this;
  }
}
