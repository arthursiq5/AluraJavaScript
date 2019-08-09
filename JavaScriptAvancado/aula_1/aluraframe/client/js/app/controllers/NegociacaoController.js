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
    this._inputData       = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor      = $('#valor');
  }

  /**
   * @param event
   */
  adiciona(event){
    event.preventDefault();

    console.log(this._inputData.value);
    console.log(this._inputQuantidade.value);
    console.log(this._inputValor.value);

    return this;
  }
}
