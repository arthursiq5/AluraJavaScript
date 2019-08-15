class NegociacaoService{

  constructor(){
    this._http = new HttpService();
  }

  obterNegociacoesDaSemana(){
    return this._obterNegociacoes('negociacoes/semana');
  }

  obterNegociacoesDaSemanaAnterior(){
    return this._obterNegociacoes('negociacoes/anterior');
  }

  obterNegociacoesDaSemanaRetrasada(){
    return this._obterNegociacoes('negociacoes/retrasada');
  }

  _obterNegociacoes(url){
    return new Promise((resolve, reject) =>
      this._http.get(url)
                .then(negociacoes =>
                  resolve(this._conversaoDeRespostaEmObjetos(negociacoes)))
                .catch(erro =>
                  reject('Não foi possível obter as negociações da semana')));
  }

  _conversaoDeRespostaEmObjetos(resposta){
    return resposta.map(objeto =>
      new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
  }
}
