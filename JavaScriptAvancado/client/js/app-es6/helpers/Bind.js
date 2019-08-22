import {ProxyFactory} from '../factories/ProxyFactory';
/**
 * @namespace app/helpers/Bind
 */
export class Bind{

  /**
   * @constructs
   * @description transforma o modelo passado em um proxy para o objeto
   * @param model model
   * @param View view
   * @param ...props
   */
  constructor(model, view, ...props){
    let proxy = ProxyFactory.create(
      model,
      props,
      (model) => view.update(model)
    );

    view.update(model);

    return proxy;
  }
}
