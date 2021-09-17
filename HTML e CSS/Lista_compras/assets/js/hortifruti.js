function hortifruti() {
    let idCont = 1;
    let itensArray = [{
            id: (`hft${idCont++}`),
            descricao: 'Melão espanhol',
            qtd: 4
        },
        {
            id: `hft${idCont++}`,
            descricao: 'Bananas',
            qtd: 12
        },
        {
            id: `hft${idCont++}`,
            descricao: 'Maças',
            qtd: 6
        },
        {
            id: `hft${idCont++}`,
            descricao: 'Laranjas',
            qtd: 6
        },
        {
            id: `hft${idCont++}`,
            descricao: 'Cebolas',
            qtd: 4,
        },
        {
            id: `hft${idCont++}`,
            descricao: 'Legumes',
            qtd: 1
        },
        {
            id: `hft${idCont++}`,
            descricao: 'Temperos',
            qtd: 1
        }
    ]

    function lista() {
        const listaItens = document.querySelector('.hortifruti');
        let ul = listaItens.querySelector('ul');

        for (i = 0; i < itensArray.length; i++) {
            let item = itensArray[i];
            let { id, descricao, qtd } = item;
            ul.innerHTML += `<li><input type="checkbox" class="leftcol" id="${id}" value="${descricao}">
  <label class="midcol" for="${id}">${descricao}</label><input type="number" class="rightcol" id="${id}" value="${qtd}"></li>`


        }
    }

    lista();
}

hortifruti();