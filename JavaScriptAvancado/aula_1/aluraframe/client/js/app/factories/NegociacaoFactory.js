class NegociacaoFactory{
  constructor(){
    this.data = "";
    this.quantidade = 1;
    this.valor = 0.0;
  }

  buildNegociacao(){
    return new Negociacao(
                 this.data,
                 this.quantidade,
                 this.valor
               );
  }
}
