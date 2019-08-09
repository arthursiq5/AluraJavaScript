/**
 * @description helper da classe Date
 * @namespace app/helpers/DateHelper
 */
class DateHelper{
  /**
   * @param string texto
   * @return Date data
   */
  textoParaData(texto){
    return new Date(...(texto.split('-').map((item, indice) => item - indice % 2)));
  }
  /**
   * @param Date data
   * @return string data
   */
  dataParaTexto(data){
    return   data.getDate()
    + '/' + (data.getMonth() + 1)
    + '/' + data.getFullYear();
  }
}
