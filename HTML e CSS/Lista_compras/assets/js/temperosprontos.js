function temperosprontos() {
    let idCont = 1;
    let itensArray = [{
            id: (`tpp${idCont++}`),
            descricao: 'Sal',
            qtd: 1
        },
        {
            id: (`tpp${idCont++}`),
            descricao: 'Meu segredo',
            qtd: 1
        },
        {
            id: (`tpp${idCont++}`),
            descricao: 'Tempero seco',
            qtd: 1
        },
        {
            id: (`tpp${idCont++}`),
            descricao: 'Molho tomate',
            qtd: 1
        },
        {
            id: (`tpp${idCont++}`),
            descricao: 'Molho pesto',
            qtd: 1
        },
        {
            id: (`tpp${idCont++}`),
            descricao: 'Molho madeira',
            qtd: 1
        },
        {
            id: (`tpp${idCont++}`),
            descricao: 'Temperos doces',
            qtd: 1
        },
        {
            id: (`tpp${idCont++}`),
            descricao: 'Fermento',
            qtd: 1
        }
    ]

    function lista() {
        const listaItens = document.querySelector('.temperosprontos');
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

temperosprontos();