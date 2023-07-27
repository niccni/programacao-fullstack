class Forma {
    calcularPerimetro(){
        console.log("Perimetro genérico");
    }
}

class Circulo extends Forma {
    constructor(raio){
        super();
        this.raio = raio;
    }
    calcularPerimetro(){
        console.log("Perimetro do círculo:" , Math.round(2 * Math.PI * this.raio * 100) / 100);
    }

    calcularArea(){
        return Math.round(Math.PI * this.raio ** 2 * 100) / 100;
    }
}

let circulo = new Circulo(5);
circulo.calcularPerimetro();
console.log(circulo.calcularArea());