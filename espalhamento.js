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

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`Ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome, 
    ...cliente.enderecos[0],
}

console.log(encomenda);

// ...cliente - e um operador de espalhamento. (Spred operator)