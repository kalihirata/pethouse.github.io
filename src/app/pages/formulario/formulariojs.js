function buscar_cep(inputCep) {

  fetch(`https://viacep.com.br/ws/${inputCep}/json/`, {
      method: 'get'
  })
      .then(response => response.json())
      .then(jsonData => {
          document.getElementById("inputAvenida") .value = jsonData.logradouro;
          document.getElementById("inputCidade") .value = jsonData.localidade;
          document.getElementById("inputEstado") .value = jsonData.uf;

      })
      .catch(err => {
          console.log(err);
      })

}