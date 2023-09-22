function esperar(segundos) {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            resolver(`Esperei ${segundos} segundos`);
        }, segundos * 1000);
    });

}

esperar(2)
.then(console.log)
/*.then(resulado = > console.log(resulado))*/