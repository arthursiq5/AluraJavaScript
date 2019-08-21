/**
 * @namespace app/view/View
 */
class View{

  /**
   * @constructs
   * @param elemento
   */
  constructor(elemento){
    this._elemento = elemento;
  }

  /**
   * @access public
   * @abstract
   * @param model modelo
   * @throws Error método deve ser implementado
   */
  template(model){
    throw new Error("O método \'template\' deve ser implementado");
  }

  /**
   * @access public
   * @description atualiza tela
   * @param model
   * @return View this;
   */
  update(model){
    this._elemento.innerHTML = this.template(model);
    return this;
  }
}
