import {View} from './View';
import {DateHelper} from '../helpers/DateHelper';
import {currentInstance} from "../controllers/NegociacaoController";
/**
 * @namespace app/view/NegociacoesView
 */
export class NegociacoesView extends View{

  /**
   * @constructs
   * @param elemento
   */
  constructor(elemento){
    super(elemento);
    elemento.addEventListener('click', function(event){
      if(event.target.nodeName == 'TH'){
        currentInstance().ordena(event.target.textContent.toLowerCase());
      }
    });
  }

  /**
   * @access public
   * @description atualiza tela
   * @param model model
   * @return string
   */
  template(model){
    return `
             <table class=\"table table-hover table-bordered\">
                 <thead>
                     <tr>
                         <th>DATA</th>
                         <th>QUANTIDADE</th>
                         <th>VALOR</th>
                         <th>VOLUME</th>
                     </tr>
                 </thead>

                 <tbody>
                  ${model.negociacoes.map(negociacao =>
                    `<tr>
                      <td>
                        ${DateHelper.dataParaTexto(negociacao.data)}
                      </td>
                      <td>
                        ${negociacao.quantidade}
                      </td>
                      <td>
                        ${negociacao.valor}
                      </td>
                      <td>
                        ${negociacao.volume}
                      </td>
                     </tr>`
                  ).join("")}
                 </tbody>

                 <tfoot>
                  <td colspan=\"3\"></td>
                  <td>
                    ${model.volumeTotal}
                  </td>
                 </tfoot>
             </table>
           `;
  }
}
