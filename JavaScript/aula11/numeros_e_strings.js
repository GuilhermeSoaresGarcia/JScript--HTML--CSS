/* Operadores aritméticos 
+  Adição e concatenação
-  Subtração
*  Multiplicação
/  Divisão
** Potenciação
%  Resto da divisão
-----------------------------------------------
Precendẽncia dos operadores aritméticos:
1º () 
2º **
3º * / %
4º + -
-----------------------------------------------
Operador de incremento (+1):
variavel++ (ou ++variavel)
- Não deve ser usado com const

Operador de decremento (-1):
variavel-- (ou --variavel)
- Não deve ser usado com const


*/
/*
console.log('Calculo simples');
const num1 = 5;
const num2 = 2;
const num3 = 10;
console.log((num1 + num2) * num3);
console.log();

console.log('Contador (com incremental declarado depois)');
let contador = 10;
console.log(contador++);
console.log(contador++);
console.log(contador++);
console.log(contador++)
console.log(contador++);
console.log(contador++);
console.log();

console.log('Descontador (com decremental declarado antes)');
let descontador = 50;
console.log(--descontador);
console.log(--descontador);
console.log(--descontador);
console.log(--descontador);
console.log(--descontador);
console.log(--descontador);
*/

// Incremento por X numero (+ pode ser substituído por outros operadores aritméticos, * - /)
// let contador = 0;
// contador += 5;
// console.log(contador);
// contador += 5;
// console.log(contador);
// contador += 5;
// console.log(contador);

// Converter string em numero
const num1 = 10; //Isso é um número
const num2 = parseInt('5.2') // Retorna um inteiro (ignora as casas decimais)
console.log('parseInt', num1 + num2);

const num3 = 10; //Isso é um número
const num4 = parseFloat('5.2') // Retorna um float
console.log('parseFloat', num3 + num4);

const num5 = 10; //Isso é um número
const num6 = Number('5.2') // Retorna um número int ou float (o JS se vira)
console.log('Number', num5 + num6);