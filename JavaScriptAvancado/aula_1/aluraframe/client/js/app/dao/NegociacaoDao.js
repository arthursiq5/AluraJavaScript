class NegociacaoDao{

  constructor(connection){

    this._connection = connection;
    this._store = 'negociacoes';
  }

  adiciona(negociacao){
    return new Promise((resolve, reject) => {

      let request = this._connection
                        .transaction([this._store],'readwrite')
                        .objectStore(this._store)
                        .add(negociacao);
      request.onsuccess = evento => {
        resolve();
      };

      request.onerror = evento => {
        console.log(evento.target.error);
        reject('Não foi possível adicionar a negociação');
      };
    });
  }
}
