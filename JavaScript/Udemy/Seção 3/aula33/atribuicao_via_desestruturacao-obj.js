const pessoa = {
    nome: 'Guilherme',
    sobrenome: 'Garcia',
    idade: 37,
    endereço: {
        rua: 'Gregorio da Fonseca',
        numero: 479
    }
};

// Atribuição via desestruturação
// Como o nome da variável vai ser igual a propriedade do objeto, basta fazer assim: 
//        propriedades 
//    nome  sobrenome  idade   = objeto
let { nome, sobrenome, idade } = pessoa;

console.log(nome, sobrenome, idade)

// É possível atribuir um valor padrão para a variável, caso a propriedade esteja em branco.
// Além disso, é possível definir um nome diferente à variável
const pessoa2 = {
    // nome: 'Marina',
    sobrenome: 'Soares',
    idade: 38,
    endereço: {
        rua: 'Oscar Schneider',
        numero: 500
    }
};

let { nome: n = 'Não informado', sobrenome: s, idade: i } = pessoa2;
console.log(n, s, i)