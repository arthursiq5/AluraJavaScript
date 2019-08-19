class NegociacaoService {

    constructor() {

        this._http = new HttpService();
    }

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
}
