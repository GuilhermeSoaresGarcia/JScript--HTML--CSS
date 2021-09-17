const todosParagrafos = document.querySelectorAll('p')

const estilosBody = getComputedStyle(document.body) // Armazena os estilos computados na variável
const bgColorBody = estilosBody.backgroundColor; // Armazena na variável a cor de fundo

// for (let paragrafos of todosParagrafos) {
//      paragrafos.setAttribute('style', 'background-color:' + bgColorBody);
// }

for (let paragrafos of todosParagrafos) {
    paragrafos.style.backgroundColor = bgColorBody // Utilizar camelCase pos JS não aceita  "-" (por exemplo no background)
    paragrafos.style.color = 'white'
}