const nome = 'Guilherme';

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i])
// }

// for (let i in nome) {
//     console.log(nome[i])
// }

// Se não for necessário o uso do índice mas apenas o valor, é possível utilizar o 
//"for of"

for (let valor of nome) {
    console.log(valor)
}


/* Em resumo:

For clássico: Geralmente com iteráveis (array ou strings)
For in: Retorna o índice ou chave (string, array ou objetos)
For of: Retorna o valor em si (iteráveis, arrays ou strings - mas não objetos) 

*/