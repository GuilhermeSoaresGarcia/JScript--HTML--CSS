/* 
"if" pode ser usado sozinho
"else" sempre precisa de um "if" antes
É possível ter vários "else if" na checagem
Só posso ter um "else" por último
*/



/* 
Entre 0 ~ 11: Bom dia!
Entre 12 ~ 17: Boa tarde!
Entre 18 ~ 23: Boa noite!
*/


// const hora = 0;

// if (hora >= 18 && hora <= 23) {
//     console.log('Boa noite!');

// } else if (hora >= 12 && hora <= 17) {
//     console.log('Boa tarde!');
// } else {
//     console.log('Bom dia!');
// }


const numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.')
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8.')
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11.')
} else {
    console.log('O número NÃO está entre 0 e 11.')
}