class Veiculo {
    constructor(marca, modelo, ano, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }
}
class Carro extends Veiculo {
    constructor(marca, modelo, ano, preco, placa) {
        super(marca, modelo, ano, preco);
        this.placa = placa;
    }
    calcularValorParcela(quantidadeDeParcelas) {
        let juros = 0.02;
        let valorComJuros = this.preco * (1 + juros) ** quantidadeDeParcelas;
        let valorParcela = valorComJuros / quantidadeDeParcelas;
        return Math.round(valorParcela * 100) / 100;
    }
}
let carro = new Carro("BMW", "X6", 2022, 740000, "LTD-6348");
console.log(carro.calcularValorParcela(36));