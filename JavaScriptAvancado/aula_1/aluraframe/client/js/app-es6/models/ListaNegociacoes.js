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

  /**
   * @access public
   * @return Array negociacoes
   */
  get negociacoes(){
    return [].concat(this._negociacoes);
  }

  /**
   * @access public
   * @description esvazia o array de negociações
   * @return ListaNegociacoes this
   */
  esvazia(){
    this._negociacoes = [];
    return this;
  }

  /**
   * @access public
   * @return float volumeTotal
   */
  volumeTotal(){
    return this._negociacoes.reduce(
        (total, negociacao) => total + negociacao.volume,
          0.0
        );
  }
}
