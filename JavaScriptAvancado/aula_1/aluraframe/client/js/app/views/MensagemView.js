/**
 * @namespace app/view/MensagemView
 */
class MensagemView extends View{

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
      `<p class="alert alert-info">${model.texto}</p>`:
      `<p></p>`;
  }
}
