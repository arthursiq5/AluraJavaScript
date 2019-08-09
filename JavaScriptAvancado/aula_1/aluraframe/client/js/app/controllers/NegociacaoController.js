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
    this.inputData       = $('#data');
    this.inputQuantidade = $('#quantidade');
    this.inputValor      = $('#valor');
  }

  /**
   * @param event
   */
  adiciona(event){
    event.preventDefault();

    console.log(this.inputData.value);
    console.log(this.inputQuantidade.value);
    console.log(this.inputValor.value);
  }
}
