function lanches() {
    let idCont = 1;
    let itensArray = [{
            id: (`lan${idCont++}`),
            descricao: 'Pão castanhas',
            qtd: 4
        },
        {
            id: (`lan${idCont++}`),
            descricao: 'Outros pães',
            qtd: 1
        },
        {
            id: (`lan${idCont++}`),
            descricao: 'San Bios',
            qtd: 1
        },
        {
            id: (`lan${idCont++}`),
            descricao: 'Qualy',
            qtd: 1
        },
        {
            id: (`lan${idCont++}`),
            descricao: 'Becel',
            qtd: 1
        },
        {
            id: (`lan${idCont++}`),
            descricao: 'Café',
            qtd: 1
        },
        {
            id: (`lan${idCont++}`),
            descricao: 'Biscoito',
            qtd: 1
        },
        {
            id: (`lan${idCont++}`),
            descricao: 'Ovos',
            qtd: 20
        },
        {
            id: (`lan${idCont++}`),
            descricao: 'Granola',
            qtd: 1
        }
    ]


    function lista() {
        const listaItens = document.querySelector('.lanches');
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

lanches();