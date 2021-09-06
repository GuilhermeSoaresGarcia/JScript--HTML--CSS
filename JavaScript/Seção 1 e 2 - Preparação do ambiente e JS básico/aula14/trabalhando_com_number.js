let num1 = 10.23;
let num2 = 2.5;

// console.log(num1.toString() + num2);
// console.log(num1.toString(2)) // Binário
// console.log(num1.toFixed(2)); // Duas casas decimais
// console.log(Number.isInteger(num1)); // Verificar se é int (resultado booleano)

/* O grau de precisão dos números em JS não é muito bom. Para arredondamentos, usar parseFloat (ou number)
com atributo toFixed(2). Por exemplo:*/

let num3 = 0.7;
let num4 = 0.1;
// console.log(num3 + num4);

//console.log(num3 + num4 + num4 + num4).toFixed(2); // Apenas para mostrar o número arredondado (como string)
num5 = num3 + num4 + num4 + num4;
num5 = Number(num5.toFixed(2)); // Para arredondar e trasnformar em number

console.log(Number.isInteger(num5), num5);