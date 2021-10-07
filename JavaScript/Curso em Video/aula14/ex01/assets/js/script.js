    let dados = document.querySelector('.dados')
    let res = document.querySelector('.resultado')

    function criarTags() {
        let p
        let input

        function criarP(texto) {
            p = document.createElement('p')
            dados.appendChild(p)
            p.innerText = texto
        }

        function criarInput(classe) {
            input = document.createElement('input')
            p.appendChild(input)
            input.setAttribute('type', 'number')
            input.setAttribute('class', classe)
            input.required = true;
        }

        function criarBotao() {
            let botao = document.createElement('button')
            dados.appendChild(botao)
            botao.setAttribute('onclick', 'executarContador()')
            botao.innerText = 'Verificar'
        }

        criarP('Início: ')
        criarInput('inicio')
        criarP('Fim: ')
        criarInput('fim')
        criarP('Passo: ')
        criarInput('passo')
        criarBotao()
    }
    criarTags()

    function executarContador() {
        let inicio = document.querySelector('.inicio')
        let fim = document.querySelector('.fim')
        let passo = document.querySelector('.passo')

        if (!inicio.value || !fim.value || !passo.value) {
            alert('Todos os campos devem ser preenchidos. Por favor verifique!')
        } else if (Number(passo.value) <= 0) {
            alert('O campo "Passo" não pode ser 0 ou negativo. O valor foi alterado para 1')
            passo.value = 1
        } else {
            res.innerHTML = ' '
            res.innerHTML += `Contador: <br>`
            if (Number(inicio.value) < Number(fim.value)) {
                for (i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
                    res.innerHTML += `\u{1F449}${i} `
                }
            } else {
                for (i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)) {
                    res.innerHTML += `\u{1F449}${i} `
                }
            }
            res.innerHTML += ` \u{1F449}\u{1F3C1}`
        }
    }