/**
 * @namespace app/services/HttpService
 */
export class HttpService{

  _handleErrors(resposta){
    if(!resposta.ok)
      throw new Error(resposta.statusText);
    return resposta;
  }

  /**
   * @access public
   * @param string url
   * @return Promise
   */
  get(url){
    return fetch(url)
             .then(resposta => this._handleErrors(resposta))
             .then(resposta => resposta.json());
  }

  /**
   * @access public
   * @param string url
   * @param dado
   * @return Promise
   */
  post(url, dado) {
    return fetch(url, {
      headers: { "Content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(dado)
    })
    .then(resposta => this._handleErrors(resposta));
    }
}
