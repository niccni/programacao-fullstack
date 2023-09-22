/*const p = new Promise((resolverPromessa, rejeitarPromessa) => {
    setTimeout(() => {
        resolverPromessa("Promessa resolvida")
    }, 2000)
});


p.then(console.log)*/

const p = new Promise((resolverPromessa, rejeitarPromessa) => {
    setTimeout(() => {
        rejeitarPromessa("Promessa rejeitada")
    }, 2000)
});

p.catch(console.log);