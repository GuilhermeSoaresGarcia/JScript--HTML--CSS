// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A
// const numeros = ['B', 'C', 'A'];

// [a, b, c] = numeros;

// console.log(a, b, c);


// Operador "rest"
const numerosRest = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, ...resto] = numerosRest;

console.log(primeiroNumero, segundoNumero, resto);


// Pula índices
const numerosPula = [10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000];
const [um, dois, , tres, , cinco, ] = numerosPula;

console.log(um, dois, tres, cinco);


const numerosArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const [lista1, lista2, lista3] = numerosArray;

console.log(numerosArray[0][2]); // Mostra o array de índice 0 (que seria o grupo com 1, 2 ,3) e o índice 2 (que seria o número 3)

console.log(lista1[2]); // O array 0 foi armazenado na variável lista 1 (por desestruturação). Bastou indicar depois o índice.