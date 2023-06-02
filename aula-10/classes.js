class Carro{
    constructor(marca, cor, modelo, velocidade){
    this.marca = marca;
    this.cor = cor;
    this.modelo = modelo;
    this.velocidade = velocidade;
    }
    acelerar(){
        return `O carro ${this.marca}, com o modelo ${this.modelo} esta acelerando`;

    }
}
