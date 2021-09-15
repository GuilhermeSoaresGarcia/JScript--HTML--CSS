function lanches() {
    let idCont = 5;
    let itensArray = [{
            id: idCont++,
            descricao: 'Pão castanhas',
            qtd: 4
        },
        {
            id: idCont++,
            descricao: 'Outros pães',
            qtd: 1
        },
        {
            id: idCont++,
            descricao: 'San Bios',
            qtd: 1
        },
        {
            id: idCont++,
            descricao: 'Qualy',
            qtd: 1
        },
        {
            id: idCont++,
            descricao: 'Becel',
            qtd: 1
        },
        {
            id: idCont++,
            descricao: 'Café',
            qtd: 1
        },
        {
            id: idCont++,
            descricao: 'Biscoito',
            qtd: 1
        },
        {
            id: idCont++,
            descricao: 'Ovos',
            qtd: 20
        },
        {
            id: idCont++,
            descricao: 'Granola',
            qtd: 1
        },
        {
            id: idCont++,
            descricao: 'Bolacha Maria',
            qtd: 3
        },
        {
            id: idCont++,
            descricao: 'Agua e sal',
            qtd: 1
        },
        {
            id: idCont++,
            descricao: 'Ameixa',
            qtd: 50
        },
        {
            id: idCont++,
            descricao: 'Outros',
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