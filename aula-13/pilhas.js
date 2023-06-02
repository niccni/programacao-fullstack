// Pilha de livros 
// LIFO -> Last in - Firsts Out -> "último a entrar, primeiro a sair "

/*
const vetor = [];
vetor.push(1);
vetor.push(2);
vetor.push(3);
vetor.push(4);
vetor.push(5);

console.log(vetor.pop());
console.log(vetor); */

const contruirPilha = () => {
    const dados = [];
    let topo = -1;

    const inserirDado = (valor) => {
        topo++;
        dados[topo] = valor;
        console.log(dados);
    }

    const removerDado = () => {
        if (topo < 0) {
            return false;
            } else {
                const item = dados[topo];
                dados.splice(topo, 1);
                topo--;
                return item;
            }
    }

    const imprimirDado = () => {
        console.log(dados);
    }

    return {
        inserirDado,
        removerDado,
        imprimirDado,
    }
}

const pilha = contruirPilha();
pilha.inserirDado(1);
pilha.inserirDado(2);
console.log(pilha.removerDado());
console.log(pilha.removerDado());
console.log(pilha.removerDado());
pilha.imprimirDado();
/*pilha.inserirDado(3);
pilha.inserirDado(4);
pilha.inserirDado(5);*/

