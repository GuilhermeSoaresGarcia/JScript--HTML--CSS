function outros() {
    let idCont = 1;
    let itensArray = [{
            id: idCont++,
            descricao: 'Pão castanhas',
            qtd: 4
        },
        {
            id: idCont++,
            descricao: 'Outros pães',
            qtd: 1
        }
    ]

    function lista() {
        const listaItens = document.querySelector('.outros');
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

outros();