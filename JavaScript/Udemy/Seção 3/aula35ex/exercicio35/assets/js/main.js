const estrutura = document.querySelector('.container');
let div = document.createElement('div'); // Cria a tag "div" (mas ainda não usa)



const elementos = [{
        tag: 'p',
        texto: 'Frase 1'
    },
    {
        tag: 'div',
        texto: 'Frase 2'
    },
    {
        tag: 'section',
        texto: 'Frase 3'
    },
    {
        tag: 'footer',
        texto: 'Frase 4'
    }
];

for (i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i]; // Atribuição via desestruturação!!
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto; // Poderia ser "innerText" por se tratar somente de texto
    // let textoCriado = document.createTextNode(texto); // (1/2). Poderia ser feito assim tbm
    // tagCriada.appendChild(textoCriado); (2/2). Poderia ser feito assim tbm
    div.appendChild(tagCriada);
}

estrutura.appendChild(div); // Usa a tag "div" (e como os demais itens foram criados dentro do "for" tudo deve aparecer)


estrutura.appendChild(a);
a.appendChild(textoA);