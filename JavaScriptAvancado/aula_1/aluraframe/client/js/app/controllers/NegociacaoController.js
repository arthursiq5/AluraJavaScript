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

    let negociacao = new Negociacao(
      new DateHelper().textoParaData(this._inputData.value),
      this._inputQuantidade.value,
      this._inputValor.value
    );

    console.log(negociacao);

    // TODO: adicionar negociação na lista

    return this;
  }
}
