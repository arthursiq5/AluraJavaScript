/**
 * @namespace app/
 */
class Negociacao{

  /**
   * @constructs
   * @param Date data
   * @param int quantidade
   * @param float valor
   * @return Negociacao this
   */
  constructor(data, quantidade, valor){
    this._data       = new Date(data.getTime());
    this._quantidade = quantidade;
    this._valor      = valor;
    Object.freeze(this);
    return this;
  }

  /**
   * @access public
   * @return float valor
   */
  get volume(){
    return this._quantidade * this._valor;
  }

  /**
   * @access public
   * @return Date data
   */
  get data(){
    return new Date(this._data.getTime());
  }

  /**
   * @access public
   * @return int quantidade
   */
  get quantidade(){
    return this._quantidade;
  }

  /**
   * @access public
   * @return float valor
   */
  get valor(){
    return this._valor;
  }

  /**
   * @access public
   * @description clona o objeto atual
   * @return app/models/Negociacao
   */
  clone(){
    return Object.assign(this);
  }
}
