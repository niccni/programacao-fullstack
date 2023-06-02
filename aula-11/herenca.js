// definindo classe pai 
class Pai {
    constructor(nome){
        this.nome = nome;
    }
    
    falar(){
        console.log(`Olá, meu nome ${this.nome}`);
    }
}

// definindo classe filho 
class Filho extends Pai {
    constructor(nome, idade){
        super(nome);
        this.idade = idade;
    };
}

// criando uma instancia de classe
const filho = new Filho('Henry', 24);
console.log(filho.nome); 