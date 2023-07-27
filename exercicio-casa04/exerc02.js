class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Estudante extends Pessoa {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    calcularMedia(nota1, nota2) {
        return Math.round(((nota1 + nota2) /2) *100) /100;
    }
}

let estudante = new Estudante("Pietro", 22, "Medicina");
console.log(estudante.calcularMedia(9.5, 8.3)); 