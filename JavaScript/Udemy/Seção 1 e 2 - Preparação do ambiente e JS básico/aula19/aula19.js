/* 
Tipos de dados primitivos (imutáveis): 
string, number, boolean, undefined, null, (bigint, symbol)
Valores são copiados

Tipos de dados passados por referência (mutáveis):
array, object, function
Valores são referência
*/

var a = 'A';
var b = a;
console.log(a, b);

var a = 'Outra coisa';
console.log(a, b); // "b" permanece igual pois cada variável aponta para um local diferente na memória


var c = [1, 2, 3];
var d = c;
c.push(4);

console.log(c, d); // "d" vai mostrar o que foi alterado em "c" pois os valores são referenciados