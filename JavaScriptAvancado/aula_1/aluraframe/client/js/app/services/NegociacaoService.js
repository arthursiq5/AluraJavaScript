/**
 * @namespace app/services/NegociacaoService
 */
class NegociacaoService {

    /**
     * @constructs
     */
    constructor() {

        this._http = new HttpService();
    }

    /**
     * @access private
     * @param Array negociacoes
     * @return Array negociacoes
     */
    _formataArrayDeNegociacoes(negociacoes){
      return negociacoes.map(
        objeto =>
          new Negociacao(
            new Date(objeto.data),
            objeto.quantidade,
            objeto.valor
          )
        );
    }

    /**
     * @access public
     * @throws Error erro ao tentar recuperar negociações
     * @return Promise negociacoesDaSemana
     */
    obterNegociacoesDaSemana() {
        return this._http
            .get('negociacoes/semana')
            .then(negociacoes => {
                return this._formataArrayDeNegociacoes(negociacoes);
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana');
            });
    }

    /**
     * @access public
     * @throws Error erro ao tentar recuperar negociações
     * @return Promise negociacoesDaSemanaAnterior
     */
    obterNegociacoesDaSemanaAnterior() {
        return this._http
            .get('negociacoes/anterior')
            .then(negociacoes => {
                return this._formataArrayDeNegociacoes(negociacoes);
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana anterior');
            });
    }

    /**
     * @access public
     * @throws Error erro ao tentar recuperar negociações
     * @return Promise negociacoesDaSemanaRetrasada
     */
    obterNegociacoesDaSemanaRetrasada() {

        return this._http
            .get('negociacoes/retrasada')
            .then(negociacoes => {
                return this._formataArrayDeNegociacoes(negociacoes);
            })
            .catch(erro => {
                console.log(erro);
                throw new Error('Não foi possível obter as negociações da semana retrasada');
            });

    }

    /**
     * @access public
     * @return Promise
     */
    obterNegociacoes() {

        return Promise.all([
            this.obterNegociacoesDaSemana(),
            this.obterNegociacoesDaSemanaAnterior(),
            this.obterNegociacoesDaSemanaRetrasada()
        ]).then(periodos => {

            let negociacoes = periodos
                .reduce((dados, periodo) => dados.concat(periodo), [])
                .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor ));

            return negociacoes;
        }).catch(erro => {
            throw new Error(erro);
        });
	}

  /**
   * @access public
   * @param Negociacao negociacao
   * @throws Error impossível adicionar negociação
   * @return Promise
   */
  cadastra(negociacao){
    return ConnectionFactory
             .getConnection()
             .then(connection => new NegociacaoDao(connection))
             .then(negociacaoDao => negociacaoDao.adiciona(negociacao))
             .then(() => "Negociação adicionada com sucesso")
             .catch(() => {
               throw new Error("Não foi possível adicionar a negociação");
             })
  }

  /**
   * @access public
   * @throws Error erro ao listar negociações
   * @return Promise
   */
  lista(){
    return ConnectionFactory
             .getConnection()
             .then(connection => new NegociacaoDao(connection))
             .then(negociacaoDao => negociacaoDao.listaTodos())
             .catch(erro => {
               console.log(erro);
               throw new Error('Não foi possível obter as negociações');
             })
  }

  /**
   * @access public
   * @throws Error erro ao apagar negociações
   * @return Promise
   */
  apaga(){
    return ConnectionFactory
             .getConnection()
             .then(connection => new NegociacaoDao(connection))
             .then(negociacaoDao => negociacaoDao.apagaTodos())
             .then(() => "Negociações apagadas com sucesso")
             .catch(erro => {
               console.log(erro);
               throw new Error("Não foi possível apagar as negociações");
             });
  }

  /**
   * @access public
   * @param Array listaAtual
   * @throws Error erro ao importar negociações
   * @return Promise
   */
  importa(listaAtual){
    return this.obterNegociacoes()
               .then(negociacoes =>
                 negociacoes.filter(negociacao =>
                   !listaAtual
                       .some(negociacaoExistente =>
                         JSON.stringify(negociacaoExistente) == JSON.stringify(negociacao)
                       )
                     )
                 )
               .catch(erro => {
                 console.log(erro);
                 throw new Error("Não foi possível buscar as negociações");
               });
  }
}
