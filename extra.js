const numerosPares = [2, 4, 6, 8]
const numerosImpares = [1, 3, 5, 7]

const numeros = [...numerosPares, ...numerosImpares]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

console.log(num1, num2, outrosNumeros);

const pessoa = {
    nome: 'Andre',
    idade: '28'
}

const pessoaComTelefone ={
    ...pessoa, telefone: 123456
}

console.log(pessoa, pessoaComTelefone);

const { nome } = pessoa

console.log(nome);

function imprimeDados({ nome, idade}) {
    console.log(nome, idade)
}

imprimeDados(pessoa);
imprimeDados(pessoaComTelefone);