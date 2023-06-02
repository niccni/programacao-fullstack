let fruta = {nome:"Morango", preco: 8.99, unidade: 1}

function imprimirFruta(obj){
    for (let valor in obj){
        console.log(obj[valor]);
    }

}


imprimirFruta(fruta);