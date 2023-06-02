const pessoas = [
    {
        nome: "Nicolly",
        idade: "24",
        sexo: "Feminino",
    },
    
    {
        nome: "Isis",
        idade: "75",
        sexo: "Feminino",
    },
    
    {
    nome: "Heitor",
    idade: "10",
    sexo: "Masculino",
    },
]
const pessoasFiltrada = pessoas
.filter((elemento) => elemento.idade < 60) 
.forEach((elemento) => console.log(elemento.nome, ":" , elemento.idade));
//console.log(pessoasFiltrada); 


