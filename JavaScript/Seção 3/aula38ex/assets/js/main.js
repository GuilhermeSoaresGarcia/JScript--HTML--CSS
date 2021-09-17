const container = document.querySelector('container')
const todosParagrafos = document.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const bgColorBody = estilosBody.backgroundColor;


//container.paragrafos.appendChild(tagFont);
// document.body.appendChild(tagFont); // ADICIONA A FONT NO BODY



for (let paragrafos of todosParagrafos) {
    let tagFont = document.createElement('font'); // Cria a tag font e armazena na variável
    container.paragrafos.appendChild(tagFont); // Insere a tag font dentro do parágrafo?
    tagFont.setAttribute('color', 'white'); // Define o atributo color com a cor white à variável
    paragrafos.setAttribute('style', 'background-color:' + bgColorBody);
}