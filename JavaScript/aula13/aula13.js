// Extrair um índice de uma string
//               01234567
let umaString = 'Um texto';

console.log(umaString[5]);

console.log(umaString.charAt(5));

// Localizar um índice de uma string
//               termo procurado / posição em que deve começar a procurar 
console.log(umaString.indexOf('x', 0));
//"lastIndexOf" procura do fim pro começo
//"search" procura por expressões regulares e retorna o índice

// Substituir um termo
console.log(umaString.replace('Um', 'Outro'));

// Substituir um caracter
let rato = 'O rato roeu a roupa do rei de Roma.'
console.log(rato.replace(/r/g, '!'));

//Tamanho da string
console.log(rato.length);

//Extrair um trecho da string
console.log(rato.slice(2, 6));

//Extrair os últimos 5 índices da string e ignorando o último (que era o .)
console.log(rato.slice(-5, -1));

//Dividir os termos de uma string em um array (usando o espaço como espaçador)
console.log(rato.split(' '));
console.log(rato.split(' ', 3));

//Upper e lower case
console.log(rato.toUpperCase());
console.log(rato.toLowerCase());

//Concatenação
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);