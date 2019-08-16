var stores = ['negociacoes'];
var version = 1;
var dbName = 'aluraframe';
var connection = null;

class ConnectionFactory{

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
          connection = evento.target.result
        resolve(connection);
      };

      openRequest.onerror = evento => {
        console.log(evento.target.error);

        reject(evento.target.error.name);
      };
    });
  }

  static _createStores(connection){
    stores.forEach(store => {

      if(connection.objectStoreNames.contains(store))
        connection.deleteObjectStore(store);

      connection.createObjectStore(store, { autoIncrement:true });
    });
  }
}
