function primeiraFuncao() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperou isso aqui')
            resolve()
        },1000)
    });
}

function primeiraFuncao02() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Esperou isso aqui tambem ')
            resolve()
        }, 2000)
    });
}
const segundaFuncao = async() => {
    console.log('Iniciou');
   await primeiraFuncao();
   await primeiraFuncao02();
    console.log('Terminou');
}

segundaFuncao();
