

var ConnectionFactory = (function (){
  const stores = ['negociacoes'];
  const version = 1;
  const dbName = 'aluraframe';
  let connection = null;
  let close = null;

  return class ConnectionFactory{

    constructor(){
      throw new Error('Não é possível criar instâncias de ConnectionFactory');
    }

    static getConnection(){
      return new Promise( (resolve, reject) => {
        let openRequest = window.indexedDB.open(dbName, version);

        openRequest.onupgradeneeded = evento =>
          ConnectionFactory._createStores(evento.target.result);

        openRequest.onsuccess = evento => {
          if(!connection)
            connection = evento.target.result;

            close = connection.close.bind(connection);
            connection.close = function(){
              throw new Error('Não foi possível fechar a conexão')
            }
          resolve(connection);
        };

        openRequest.onerror = evento => {
          console.log(evento.target.error);

          reject(evento.target.error.name);
        };
      });
    }

    static closeConnection(){
      if(connection){
        close();
        connection = null;
      }
    }

    static _createStores(connection){
      stores.forEach(store => {

        if(connection.objectStoreNames.contains(store))
          connection.deleteObjectStore(store);

        connection.createObjectStore(store, { autoIncrement:true });
      });
    }
  }
})();
