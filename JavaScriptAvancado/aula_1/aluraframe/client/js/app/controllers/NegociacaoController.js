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

    console.log(typeof(this._inputData.value));

    let data = new Date(...
                         this._inputData.value
                             .split('-')
                             .map((item, indice) => (item - (indice % 2)))
                       );

    let negociacao = new Negociacao(
      data,
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);

    // TODO: adicionar negociação na lista

    return this;
  }
}
