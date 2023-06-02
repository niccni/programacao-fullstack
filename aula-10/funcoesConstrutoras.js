function Carro (marca, cor, modelo, velocidade) {
    this.marca = marca;
    this.cor = cor;
    this.modelo = modelo;
    this.velocidade = velocidade; 
    this.acelerar = () => {
        return `O carro ${this.marca}, com o modelo ${this.modelo} esta acelerando`;
    };
}

const carro1 = new Carro("Fiat", "Branco", "500", "200km" );
const carro2 = new Carro("Porsche", "Preto", "Porsche 911Turbo", "350km");
const carro3 = new Carro("Ferrari", "Vermelho", "F450", "450km" );
const carro4 = new Carro("Onix", "Azul", "600", "115km");
const carro5 = new Carro("BMW", "Cinza", "XR", "500km");
console.log(carro2.acelerar());

//console.log(carro1.cor, carro2.modelo, carro2.velocidade);

 

/*mesma coisa que o de cima
 carro1 = {
    cor: "Branco",
    modelo: "500",
    velocidade: "200km",
} */