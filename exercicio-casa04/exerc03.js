class Animal {
    constructor(especie) {
        this.especie =  especie;
    }

    fazerSom(){
        console.log("Som genérico de animal");
    }
}

class Gato extends Animal {
    constructor(especie, raca) {
        super(especie);
        this.raca = raca;
    }

    miar() {
        console.log("Miau" + " ".repeat(Math.floor(Math.random() * 4) + 1) + "Miau!");
    }
}

let gato = new Gato("Felino", "Maine Coon");
gato.miar();