/* Guilherme Soares Garcia tem 37 anos, pesa 70 kg
tem 1.7 de altura e seu IMC é de
Guilherme nasceu em 1984
*/

const nome = 'Guilherme'
const sobrenome = 'Soares Garcia'
const idade = 37
const peso = 70
const altura = Number('1.71').toFixed(2);

let imc = Number(peso / (altura ** 2)).toFixed(2);
let anoNascimento = 2021 - idade;

// console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso + 'kg tem', altura + 'm de altura e seu IMC é de', imc);
// console.log(nome, 'nasceu em', anoNascimento + '.');

// Template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg
tem ${altura}m de altura e seu IMC é de ${imc}
${nome} nasceu em ${anoNascimento}.`)