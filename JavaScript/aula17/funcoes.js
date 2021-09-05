/* 
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Guilherme'); // Armazena na variável o resultado da função
console.log(variavel);
*/

/*
function soma(x = 'Digite', y = ' algo') { // Se eu não enviar nenhum valor, aparecerá a mensagem "Digite algo"
    const resultado = x + y;
    return resultado;
}

// console.log(soma(2, 2));
// console.log(soma(6, 19));
// console.log(soma(1, 5));

const resultado = soma(1, 7); // Por estar isolada na função, posso usar o mesmo nome de constante sem problema (não dará erro de reatribuição de valor)
console.log(resultado);
*/

const raiz = function(n) {
    return Math.sqrt(n); // Ou poderia ser tbm "n ** 0.5", mas eu prefiro usar o módulo Math
};

// const raiz = n => n ** 0.5; // Mesma função em "arrow function"


console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));