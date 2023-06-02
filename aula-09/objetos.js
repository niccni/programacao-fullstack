const pessoa = {
    nome: "Nicolly",
    sobrenome: "Reis", 
    idade: "24",
    escolaridade: "Formada",
    sexo: "Feminino",
    skils: ["Javascript", "Enfermagem", "Java"],
    andar: () => {
        return "Estou andando...";
    }
}
/*console.log(pessoa["nome"]);
console.log(pessoa.skils[0]);*/

for (const item in pessoa) {
    console.log(item + ":" + pessoa[item]);

}

