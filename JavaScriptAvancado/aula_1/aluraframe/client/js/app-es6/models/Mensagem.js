/**
 * @namespace app/models/Mensagem
 */
class Mensagem{
  constructor(texto){
    this._texto = texto || '';
  }

  /**
   * @access public
   * @return string texto
   */
  get texto(){
    return this._texto;
  }

  /**
   * @param public
   */
  set texto(texto){
    this._texto = texto;
  }
}
