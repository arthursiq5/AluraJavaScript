class Conta{

  /**
   * @constructs
   * @param int saldo
   */
  constructor(saldo){
    this._saldo = saldo;
  }

  /**
   * @access public
   * @return saldo
   */
  get saldo(){
    return this._saldo;
  }

  /**
   * @access public
   * @param float taxa
   * @throws Error método "atualiza" não implementado
   */
  atualiza(taxa){
    throw new Error("Método \"atualiza()\" deve ser implementado");
  }
}
