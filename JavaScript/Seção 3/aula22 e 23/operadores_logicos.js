/* Operadores lógicos
&& - AND 
|| - OR
! - NOT
*/

const expressaoAnd = true && true && true; // Todas as expressões precisam ser true para retornar true
const expressaoOr = true || false; // Se pelo menos uma das expressões retornar true, o resultado será true
const expressaoNot = !false; // Inverte o valor retornado. 

console.log(expressaoAnd);
console.log(expressaoAnd);
console.log(expressaoNot);

/* Em JS tudo pode ser avaliado em true ou falso. Além do próprio "false" as seguintes expressões são avaliadas como false:
0
'' "" ``
null / undefined
NaN
*/

function falaOi() {
    return 'Oi';
}

let vaiExecutar = 'Teu cu'; // Se o valor for qq um dos valores falsos, a função não é executada. Qq outro valor executa a função.

console.log(vaiExecutar && falaOi());