const dados = require("./cliente.json");
// REQUIRE - uma funcao que o node nos permite usar para puxar um codigo de algum outro lugar.

console.log(dados);

console.log(typeof dados);

const clienteEmString = JSON.stringify(dados);

console.log(clienteEmString);
console.log(typeof clienteEmString);

console.log(clienteEmString.nome);

const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);