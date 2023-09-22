const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase();

new Promise((resolver) => {
    resolver(["Luisa", "Helena", "Bernardo", "Heitor", "Liz"])
})
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(console.log)

/*console.log(primeiroElemento(["Banana", "Melão","Tomate"]))*/