/*var numeros = [0, 1, 2, 3, 4, 5];
var total = numeros.reduce((acumulador, numero, indice, original) => {
    console.info(`${acumulador} total até o momento`);
    console.log(`${numero} valor atual`);
    console.log(`${indice} indeice atual`);
    console.log(`${original} array original`);
    return acumulador += numero;
}, 0)
console.warn('acabooooooou');
console.log(total);
*/

const numeros = [0, 1, 2, 3, 4, 5, 6];
const total = numeros.reduce((acumulador, numero, indice, original) => {
    return acumulador + numero;
})
console.log(`${total} - total até o momento`)