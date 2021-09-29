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

        res.innerHTML = ' '
        res.innerHTML += `Contador: `

        for (i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
            res.innerHTML += `👉 ${i} `
        }
        res.innerHTML += ` 🏁`
    }