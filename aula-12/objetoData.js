//const date = new Date();
//const diaDaSemana = date.getDay();

//console.log(date.getFullYear()); 
//console.log(date.getDate());
const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]; 

const diasDaSemana = [
    'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'
];

const hoje = new Date();
const diaSemana = diasDaSemana[hoje.getDay()];
const diaMes = hoje.getDate();
//const mes = hoje.getMonth();
const ano = hoje.getFullYear();
const mes = meses[hoje.getMonth()];

console.log(`Hoje é ${diaSemana}, ${diaMes} de ${mes} de ${ano}.`);

//console.log(diaSemana);
