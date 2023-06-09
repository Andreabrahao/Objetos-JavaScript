const cliente = {
    nome: "Andre",
    idade: 28,
    cpf: "1112223333",
    email: "andre@user.com"
};

console.log(`O nome do cliente e ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos.`);

console.log(`Os primeiros digitos do cpf sao ${cliente.cpf.substring(0,3)}`);

const chaves = ["nome", 'idade', "cpf", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`A chave ${chaves} tem valor ${cliente[chave]}`)
});