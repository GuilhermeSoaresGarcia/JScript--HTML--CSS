/* Escreva uma função que recebe um número e retorne o seguinte:
Número é divisível por 3: Fizz
Número é divisível por 5: Buzz
Número é divisível por 3 e 5: FizzBuzz
Número NÃO é divisível por 3 e 5: Retorna o próprio número
Checar se o número é realmente um número = se for string, retorna o próprio número
Use a função com número de 0 a 100
*/


function fizzBuzz(num) {
    if (typeof(num) === 'string') {
        return `Isto é uma string: "${num}"`
    } else
        while (num >= 0 && num <= 100) {
            if (num % 3 === 0 && num % 5 === 0) {
                return 'FizzBuzz'
            } else if (num % 3 === 0) {
                return 'Fizz'
            } else if (num % 5 === 0) {
                return 'Buzz'
            } else {
                return `O número "${num}" não é divisível por 3 ou por 5`
            }
        }
    return `Deve ser um número entre 0 e 100, mas foi inserido ${num}`
}

for (let i = 0; i <= 102; i++)
    console.log(i, fizzBuzz(i));