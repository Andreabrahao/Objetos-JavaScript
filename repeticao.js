const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@email.com",
    telefone: ["111222333", "11133340"]
};

cliente.enderecos = [
    {
        rua: "rua Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}
