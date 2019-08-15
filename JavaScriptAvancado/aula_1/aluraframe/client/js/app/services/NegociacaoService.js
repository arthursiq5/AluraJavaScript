class NegociacaoService{

  obterNegociacoesDaSemana(callBack){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/semana');

    xhr.onreadystatechange = () => {

      if(xhr.readyState == 4){

        if (xhr.status == 200) {


          callBack(null, JSON.parse(xhr.responseText)
            .map(
              objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
            )
          );
          // this._mensagem.texto = "Negociações importadas com sucesso";

        }else{

          console.log(xhr.responseText);
          callBack("Não foi possível obter as negociações da semana");

        }
      }

    };

    xhr.send();
  }

  obterNegociacoesDaSemanaAnterior(callBack){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/anterior');

    xhr.onreadystatechange = () => {

      if(xhr.readyState == 4){

        if (xhr.status == 200) {


          callBack(null, JSON.parse(xhr.responseText)
            .map(
              objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
            )
          );
          // this._mensagem.texto = "Negociações importadas com sucesso";

        }else{

          console.log(xhr.responseText);
          callBack("Não foi possível obter as negociações da semana anterior");

        }
      }

    };

    xhr.send();
  }

  obterNegociacoesDaSemanaRetrasada(callBack){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'negociacoes/retrasada');

    xhr.onreadystatechange = () => {

      if(xhr.readyState == 4){

        if (xhr.status == 200) {


          callBack(null, JSON.parse(xhr.responseText)
            .map(
              objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
            )
          );
          // this._mensagem.texto = "Negociações importadas com sucesso";

        }else{

          console.log(xhr.responseText);
          callBack("Não foi possível obter as negociações da semana retrasada");

        }
      }

    };

    xhr.send();
  }
}
