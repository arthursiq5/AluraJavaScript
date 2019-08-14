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
    let self = this;
    this._inputData       = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor      = $('#valor');

    this._negociacoesView  = new NegociacoesView($("#negociacoesView"));
    this._listaNegociacoes = new Bind(
                               new ListaNegociacoes(),
                               this._negociacoesView,
                               ['adiciona', 'esvazia']
                             );
    // ProxyFactory.create(
    //                           new ListaNegociacoes(),
    //                           ['adiciona', 'esvazia'],
    //                           (model) => this._negociacoesView.update(model)
    //                         );
    this._mensagemView     = new MensagemView($("#mensagemView"));
    this._mensagem         = new Bind(
                               new Mensagem(),
                               this._mensagemView,
                               ['texto']
                             );
  }

  /**
   * @param event
   */
  adiciona(event){
    event.preventDefault();

    this._listaNegociacoes.adiciona(this._criaNegociacao());

    this._mensagem.texto = "Negociação adicionada com sucesso";

    this._limpaFormulario();

    // this._mensagemView.update(this._mensagem);

    return this;
  }

  apaga(){
    this._listaNegociacoes.esvazia();

    this._mensagem.texto = "Negociações apagadas com sucesso";
  }

  /**
   * @description cria uma negociação baseada na NegociacaoFactory
   * @return Negociacao
   */
  _criaNegociacao(){
    let negociacaoFactory = new NegociacaoFactory();

    negociacaoFactory.data       = DateHelper.textoParaData(this._inputData.value);
    negociacaoFactory.valor      = this._inputValor.value;
    negociacaoFactory.quantidade = this._inputQuantidade.value;

    return negociacaoFactory.negociacao;
  }

  /**
   * @description limpa o formulário
   * @return NegociacaoController this
   */
  _limpaFormulario(){
    this._inputData.value = "";
    this._inputQuantidade.value = 1;
    this._inputValor.value = 0.0;

    this._inputData.focus();

    return this;
  }
}
