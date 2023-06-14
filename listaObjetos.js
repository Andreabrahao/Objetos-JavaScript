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

// console.log(cliente["endereco"]); Mesma forma que o console.log abaixo.

cliente.enderecos.push({
    rua: "R. Joseph pinto",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);