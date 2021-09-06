/* Operadores de comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) *************** não é recomendável o uso
=== igualdade estrita (valor e tipo)
!= diferente (valor) *************** não é recomendável o uso
!== diferente estrito (valor e tipo)
*/


const num1 = 10;
const num2 = '10';

console.log(num1 == num2); // Retornará true, mesmo que num1 seja number e num2 seja string
console.log(num1 === num2); // Por isso deve-se usar sempre === para evitar confusões de tipo (neste caso, retornará false)
console.log(num1 != num2); // Isso também vale para diferente 
console.log(num1 !== num2);