/**
 * @namespace app/services/HttpService
 */
class HttpService{

  /**
   * @access public
   * @param string url
   * @return Promise
   */
  get(url){
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      xhr.onreadystatechange = () => {

        if(xhr.readyState == 4){

          if (xhr.status == 200) {

            resolve(JSON.parse(xhr.responseText));

          }else{
            reject("Não foi possível obter as negociações da semana retrasada");
          }
        }

      };

      xhr.send();
    });
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
