class Veiculo {
    constructor(nome){
        this.nome = nome;
    }
    locomover(){
        return `Estou me locomovendo`
    }
}

class Carro extends Veiculo {
    constructor(nome, modelo, marca, velocidade, cor){
        super(nome);
        this.modelo = modelo;
        this.marca = marca;
        this.velocidade = velocidade;
        this.cor = cor;
    };
    
}

const carro = new Carro('Carro','900','BMW','200km','Preto');
console.log(carro.modelo);
console.log(carro.locomover());
