const hoje = new Date();
const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month: 'long', 
    day: 'numeric',
}
const dataExtenso = hoje.toLocaleDateString('pt-Br', opcoes);
console.log("Hoje é " + dataExtenso);