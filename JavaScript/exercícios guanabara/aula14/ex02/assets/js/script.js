let dados = document.querySelector('.dados')
let res = document.querySelector('.resultado')

function criarP() {
    p = document.createElement('p')
    dados.appendChild(p)
    p.innerHTML = 'Número: '
}

function criarInput() {
    input = document.createElement('input')
    p.appendChild(input)
    input.setAttribute('type', 'number')
    input.setAttribute('class', 'num')
}

function criarButton() {
    button = document.createElement('button')
    p.appendChild(button)
    button.setAttribute('class', 'botao')
    button.setAttribute('onclick', 'gerarTabuada()')
    button.innerText = 'Gerar tabuada'
}

function criarSelect() {
    select = document.createElement('select')
    res.appendChild(select)
    select.setAttribute('class', 'tabuada')
    select.setAttribute('name', 'tabuada')
    select.setAttribute('multiple', '')
}

function criarSelectOption() {
    option = document.createElement('option')
    option.setAttribute('class', 'opcao')
    select.appendChild(option)
}

criarP()
criarInput()
criarButton()
criarSelect()
criarSelectOption()
option.innerHTML = 'Digite um número acima'

function gerarTabuada() {

    let numero = document.querySelector('.num')
    let fatorA
    let fatorB = Number(numero.value)
    option.innerText = ''

    if (!fatorB) {
        alert('Insira um número no campo "Número"')
    } else {
        for (fatorA = Number(0); fatorA < 11; fatorA++) {
            option.innerText += `${fatorA} x ${fatorB} = ${fatorA * fatorB}`
            criarSelectOption()
        }
    }
}