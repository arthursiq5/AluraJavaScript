/**
 * @namespace app/services/HttpService
 */
class HttpService{

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
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado)); // usando JSON.stringify para converter objeto em uma string no formato JSON.
        });

    }
}
