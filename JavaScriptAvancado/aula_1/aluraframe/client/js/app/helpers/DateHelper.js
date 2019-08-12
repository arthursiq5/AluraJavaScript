/**
 * @description helper da classe Date
 * @namespace app/helpers/DateHelper
 */
class DateHelper{
  /**
   * @throws Error DateHelper não pode ser instanciado
   * @constructs
   */
  constructor(){
    throw new Error("DateHelper não pode ser instanciado");
  }

  /**
   * @param string texto
   * @return Date data
   */
  static textoParaData(texto){
    if(!ExpressaoRegularHelper.validaData(texto))
      throw new Error(`Deve estar no formato aaaa-mm-dd`);
    return new Date(...(texto.split('-').map((item, indice) => item - indice % 2)));
  }

  /**
   * @param Date data
   * @return string data
   */
  static dataParaTexto(data){
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}
