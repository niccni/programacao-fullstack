// Obtendo dados de um servidor ficticio 

async function obterDadosDoServidor(id){
    const resposta = await fetch(`http://pokeapi.co/api/v2/pokemon/${id}`);
    const dados = await resposta.json()
    console.log('Nome:' , dados.name);

}

obterDadosDoServidor(25);