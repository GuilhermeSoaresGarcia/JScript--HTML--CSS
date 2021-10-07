// Continue: continua para a próxima iteração
// Break: sai/interrompe o laço


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let numero of numeros) {
    if (numero === 2) { // No 2, pula o índice (e mostra a msg) depois continua
        console.log('Pulei o número 2')
        continue;
    }

    if (numero === 7) { // Se achar o 7, termina o laço (e mostra a msg)
        console.log('Número 7 encontrado, interrompendo o laço...')
        break;
    }

    console.log(numero)

}