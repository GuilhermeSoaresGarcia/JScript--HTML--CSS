// Escreva uma função que recebe 2 números e retorne o maior deles

function maiorNumero() {
    let num1 = prompt('Insira o primeiro número:');
    let num2 = prompt('Insira o segundo número:');

    if (num1 > num2) {
        alert(`O maior número é ${num1}`);
    } else if (num2 > num1) {
        alert(`O maior número é ${num2}`);
    } else {
        alert('Os números devem ser diferentes')
    }
}

maiorNumero();


// Resolução do professor
/*
const max = (x, y) => x > y ? x : y; // Resolveu com arrow function
console.log(max(10, 5));
*/