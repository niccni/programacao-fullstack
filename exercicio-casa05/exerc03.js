class ContaBancaria {
    constructor(saldo, titular){
        this.saldo = saldo;
        this.titular = titular;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        this.saldo -= valor;
    }
}