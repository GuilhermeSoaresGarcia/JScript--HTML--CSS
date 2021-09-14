//const data = new Date(0); // 01-01-1970 Timestamp do unix ou época unix
// const data = new Date(); // Data atual
// console.log((data.toString().slice(4, 15)));

const data = new Date('1998-05-12 00:10:59'); // Data específica
console.log('Dia:', data.getDate());
console.log('Mês:', data.getMonth()); // Janeiro é 0, dezembro 11
console.log('Ano:', data.getFullYear());
console.log('Dia da sema:', data.getDay()); // Domingo é 0, sábado 6