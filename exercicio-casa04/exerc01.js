class Figura {
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
}

class Retangulo extends Figura {
    constructor(altura, largura){
        super(altura, largura);
    }
    calcularArea(){
        return Math.round(this.altura * this.largura * 100) / 100;
    }
}

let retangulo = new Retangulo(5 , 10);
console.log(retangulo.calcularArea());  