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

    this._listaNegociacoes = new Bind(
                               new ListaNegociacoes(),
                               new NegociacoesView($("#negociacoesView")),
                               'adiciona', 'esvazia'
                             );

    this._mensagem = new Bind(
                      new Mensagem(),
                      new MensagemView($("#mensagemView")),
                      'texto'
                     );
    this._negociacaoService = new NegociacaoService();
    this._init();
  }

  _init(){
    this._negociacaoService
        .lista()
        .then(negociacoes =>
               negociacoes.forEach(negociacao =>
                 this._listaNegociacoes.adiciona(negociacao)))
        .catch(erro => {
          console.log(erro);
          this._mensagem.texto = erro;
        });
    setInterval(() => {
      this.importaNegociacoes();
    }, 3000);
  }

  /**
   * @param event
   */
  adiciona(event){
    event.preventDefault();

    let negociacao = this._criaNegociacao();
    this._negociacaoService
        .cadastra(negociacao)
        .then((mensagem) => {
          this._listaNegociacoes.adiciona(negociacao);
          this._mensagem.texto = mensagem;
        })
        .catch(erro => this._mensagem.texto = erro);

    return this;
  }

  apaga(){
    this._negociacaoService
        .apaga()
        .then(mensagem => {
          this._mensagem.texto = mensagem;
          this._listaNegociacoes.esvazia();
        })
        .catch(evento => {
          this._mensagem.texto = "Não foi possível remover as negociações";
          console.log(evento.target.error);
        });
    return this;
  }

  importaNegociacoes(){
    this._negociacaoService
        .obterNegociacoes()
        .then(negociacoes =>
          negociacoes.filter(negociacao =>
            !this._listaNegociacoes
                .negociacoes
                .some(negociacaoExistente =>
                  JSON.stringify(negociacaoExistente) == JSON.stringify(negociacao)
                )
              )
          )
        .then(negociacoes =>
          negociacoes.forEach(negociacao => {
            this._listaNegociacoes.adiciona(negociacao);
            this._mensagem.texto = 'Negociações do período importadas'
        }))
        .catch(erro => this._mensagem.texto = erro);

    return this;
  }

  /**
   * @description cria uma negociação baseada na NegociacaoFactory
   * @return Negociacao
   */
  _criaNegociacao(){
    let negociacaoFactory = new NegociacaoFactory();

    negociacaoFactory.data       = DateHelper.textoParaData(this._inputData.value);
    negociacaoFactory.valor      = parseInt(this._inputValor.value);
    negociacaoFactory.quantidade = parseFloat(this._inputQuantidade.value);

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
