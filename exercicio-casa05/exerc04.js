class CarrinhoDeCompras {
    constructor(){
        this.itens = [];
    }
    
    adicionarItem(item) {
        this.itens.push(item);
    }

    removerItem(item){
        const index = this.itens.indexOf(item);
        if (index >= 0){
            this,this.itens.splice(index, 1);
        }
    }
}