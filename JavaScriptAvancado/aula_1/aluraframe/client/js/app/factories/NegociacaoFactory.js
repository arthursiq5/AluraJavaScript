/**
 * @namespace app/Models/NegociacaoFactory
 */
class NegociacaoFactory{

  /**
   * @constructs
   */
  constructor(){
    this.data = "";
    this.quantidade = 1;
    this.valor = 0.0;
  }

  /**
   * @access public
   * @return Negociacao negociacao
   */
  get negociacao(){
    return new Negociacao(
                 this.data,
                 this.quantidade,
                 this.valor
               );
  }
}
