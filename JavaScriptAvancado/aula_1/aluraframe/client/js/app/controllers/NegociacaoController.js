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

    this._mensagem         = new Bind(
                               new Mensagem(),
                               new MensagemView($("#mensagemView")),
                               'texto'
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

    return this;
  }

  apaga(){
    this._listaNegociacoes.esvazia();

    this._mensagem.texto = "Negociações apagadas com sucesso";
  }

  importaNegociacoes(){
    let service = new NegociacaoService();

    let promise = service.obterNegociacoesDaSemana();

    promise.then(negociacoes => {

                  negociacoes.forEach(negociacao => {
                    this._listaNegociacoes.adiciona(negociacao);
                  });
                    this._mensagem.texto = 'Negociações da semana importadas com sucesso';
                })

       .catch(erro => {
         this._mensagem.texto = erro;
       });

    promise = service.obterNegociacoesDaSemanaAnterior();

    promise.then(negociacoes => {

                 negociacoes.forEach(negociacao => {
                   this._listaNegociacoes.adiciona(negociacao);
                 });
                   this._mensagem.texto = 'Negociações da semana importadas com sucesso';
               })

      .catch(erro => {
        this._mensagem.texto = erro;
      });

    promise = service.obterNegociacoesDaSemanaRetrasada();

    promise.then(negociacoes => {
                negociacoes.forEach(negociacao => {
                  this._listaNegociacoes.adiciona(negociacao);
                });
                  this._mensagem.texto = 'Negociações da semana importadas com sucesso';
                })
                .catch(erro => {
                  this._mensagem.texto = erro;
                });

    // service.obterNegociacoesDaSemana((err, negociacoes) => {
    //
    //   if(err){
    //     this._mensagem.texto = err;
    //     return;
    //   }
    //
    //   negociacoes.forEach(
    //     negociacao => this._listaNegociacoes.adiciona(negociacao)
    //   );
    //   this._mensagem.texto = 'Negociações importadas com sucesso';
    //
    //   service.obterNegociacoesDaSemanaAnterior((err, negociacoes) => {
    //
    //     if(err){
    //       this._mensagem.texto = err;
    //       return;
    //     }
    //
    //     negociacoes.forEach(
    //       negociacao => this._listaNegociacoes.adiciona(negociacao)
    //     );
    //     this._mensagem.texto = 'Negociações importadas com sucesso';
    //
    //     service.obterNegociacoesDaSemanaRetrasada((err, negociacoes) => {
    //
    //       if(err){
    //         this._mensagem.texto = err;
    //         return;
    //       }
    //
    //       negociacoes.forEach(
    //         negociacao => this._listaNegociacoes.adiciona(negociacao)
    //       );
    //       this._mensagem.texto = 'Negociações importadas com sucesso';
    //     });
    //   });
    // });
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
