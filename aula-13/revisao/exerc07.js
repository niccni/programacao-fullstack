// Usando o filter, crie uma função que itera sobre um array e retorna um novo array com apenas os números pares.
const numeros = [1,5,9,7,8,6,2,4];

function valorFinal() {
const numerosFiltrados = numeros.filter((numeros) => numeros % 2 === 0);

console.log(numerosFiltrados);
}

valorFinal();