/*const p = new Promise(resolverPromessa => {
    resolverPromessa(3);
})

p.then((valor) => console.log(valor)) */

const p = new Promise(resolverPromessa => {
    resolverPromessa([
        {
            id: 1,
            nome: "Tom",
            idade: 24,
        },
        {
            id: 2,
            nome: "Aurora",
            idade: 30,
        },
        {
            id: 3,
            nome: "Ben",
            idade: 4,
        },
    ]);
})

p.then(valor => JSON.stringify(valor))
    /* .then(valor => console.log(valor)); */
    .then(valor => JSON.parse(valor))
    /*.then(console.log)*/
    .then(valor => valor.forEach(el => {
        console.log(el.nome);
    }))