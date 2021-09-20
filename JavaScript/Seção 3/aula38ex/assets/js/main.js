const todosParagrafos = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;
let tagFont = document.createElement('font'); // Cria a tag font e armazena na variável
document.body.appendChild(tagFont); // ADICIONA A FONT NO BODY
tagFont.setAttribute('color', 'white'); // Define o atributo color com a cor white à variável

for (let paragrafos of todosParagrafos) {
    tagFont.appendChild(paragrafos); // Insere a tag font dentro do parágrafo?
    paragrafos.setAttribute('style', 'background-color:' + bgColorBody);
}