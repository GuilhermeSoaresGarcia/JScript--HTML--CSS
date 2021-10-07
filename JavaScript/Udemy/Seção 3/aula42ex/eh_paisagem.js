/* Escreva uma função chamada ePaisagem que recebe dois argumentos, 
largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
// */
function ePaisagem(l, h) {
    if (l > h) {
        return true;
    }
    return false;
};

console.log(ePaisagem(1080, 1920));


/* Em arrow function:
 */

// const ehPaisagem = (largura, altura) => largura > altura;
// console.log(ehPaisagem(1080, 1920));