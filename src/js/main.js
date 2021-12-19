const cep = document.querySelector("#cep")

const showData = (result) => {
    for(const campo in result) {

        //if só vai exibir resultados que correspondem ao id no html
        if(document.querySelector("#"+campo)) {
            //autocomplete no campo
            document.querySelector("#"+campo).value = result[campo];
            console.log(campo)
        }

    }
}

//observarelemento CEP e aplicar evento "blur"
cep.addEventListener("blur", (e) => {

    //remover hífen do campo , caso tenha
    let search = cep.value.replace("-","")

    //cross origin - informa servidores diferentes. boa prática
    const options = {
        method: "GET",
        mode: "cors",
        cache: "default"
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => { 
             response.json()
            .then(data => showData(data))
        })
        .catch(e => console.log('Algo de errado aconteceu: ' + e.message))
})