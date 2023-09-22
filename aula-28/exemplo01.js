const pessoas = [
    {
        id: 1,
        nome: "Aurora",
        email:"aurora@gmail.com"
    }, 
    {
        id:2, 
        nome:"Heitor",
        email:"heitor@gmail.com"
    }, 
    {
        id:3, 
        nome:"Tom",
        email:"tom@gmail.com",

    }
];

const json = JSON.stringify(pessoas);
console.log(json);