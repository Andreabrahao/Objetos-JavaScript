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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. E necessario ter um endereco cadastrado.");
}