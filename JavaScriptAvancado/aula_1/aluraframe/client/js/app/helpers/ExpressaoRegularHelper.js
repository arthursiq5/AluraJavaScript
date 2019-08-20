/**
 * @description validador de expressões regulares
 * @namespace app/helpers/DateHelper
 */
class ExpressaoRegularHelper{

  /**
   * @throws Error ExpressaoRegular não pode ser instanciado
   * @constructs
   */
  constructor(){
    throw new Error("ExpressaoRegular não pode ser instanciada");
  }

  /**
   * @access public
   * @description valida expressão regular
   * @param string data
   * @return boolean resultado
   */
  static validaData(data){
    let expressao = /^\d{4}-\d{2}-\d{2}$/;
    return expressao.test(data);
  }
}
