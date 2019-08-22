/**
 * @namespace app/models/ListaNegociacoes
 */
export class ListaNegociacoes{

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

  /**
   * @access public
   * @description ordena a partir de um critério
   * @param Function criterio
   */
  ordena(criterio) {
      this._negociacoes.sort(criterio);
      return this;
  }

  inverteOrdem() {
      this._negociacoes.reverse();
      return this;
  }
}
