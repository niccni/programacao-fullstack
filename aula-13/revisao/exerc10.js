class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.altura * this.largura;
    }

    calcularPerimetro() {
        return 2 * (this.altura + this.largura);
    }

    calcularDiagonal() {
        return Math.sqrt(this.altura ** 2 + this.largura ** 2).toFixed(2);
    }

    toString() {
        return `Retangulo de largura ${this.largura}, altura ${this.altura}, área ${this.calcularArea()}, perímetro ${this.calcularPerimetro()} e a diagonal ${this.calcularDiagonal()}`;
    }
}

const retangulo1 = new Retangulo(5, 10);

console.log(retangulo1.toString());
