import {View} from './View';
/**
 * @namespace app/view/MensagemView
 */
export class MensagemView extends View{

  /**
   * @constructs
   * @param elemento
   */
  constructor(elemento){
    super(elemento);
  }

  /**
   * @access public
   * @description atualiza tela
   * @param model model
   * @return string
   */
  template(model){
    return model.texto ?
      `<p class=\"alert alert-info\">${model.texto}</p>`:
      `<p></p>`;
  }
}
