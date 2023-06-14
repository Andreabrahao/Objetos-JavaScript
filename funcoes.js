const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@email.com",
    telefone: ["111222333", "11133340"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
            console.log(`Pagamento Aprovado. Novo saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuaPagamento(25);
cliente.efetuaPagamento(250);