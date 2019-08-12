class NegociacaoFactory{
  constructor(){
    this.data = "";
    this.quantidade = 1;
    this.valor = 0.0;
  }

  get negociacao(){
    return new Negociacao(
                 this.data,
                 this.quantidade,
                 this.valor
               );
  }
}
