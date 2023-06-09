const cliente = {
    nome: "Andre",
    idade: 28,
    cpf: "1112223333",
    email: "andre@user.com"
};

console.log(`O nome do cliente e ${cliente.nome}`);

console.log(`Os primeiros digitos do cpf sao ${cliente.cpf.substring(0,3)}`);