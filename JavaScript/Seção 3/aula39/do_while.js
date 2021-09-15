/*
let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}
*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(1, 50);
let contagem = 0;


// Checa a condição depois executa o código
// while (rand !== 10) {
//     rand = random(min, max);
//     contagem++
//     console.log(rand);
// }

// console.log(`Foram ${contagem} iterações!`);

// Executa o código depois checa a condição

do {
    rand = random(min, max);
    contagem++
    console.log(rand);
} while (rand !== 10);

console.log(`Iterações ${contagem}`)