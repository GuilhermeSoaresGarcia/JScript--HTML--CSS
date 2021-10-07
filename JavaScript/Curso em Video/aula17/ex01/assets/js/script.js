let dados = document.querySelector('.dados')
let res = document.querySelector('.resultado')
numeroArray = []

// Início da criação de tags
function criarP(classe) {
    p = document.createElement('p')
    classe.appendChild(p)
}

function criarInput(classe) {
    input = document.createElement('input')
    classe.appendChild(input)
}

function criarButton(classe) {
    button = document.createElement('button')
    classe.appendChild(button)
}

function criarSelect(classe) {
    select = document.createElement('select')
    classe.appendChild(select)
    select.setAttribute('multiple', '')
}

function criarSelectOption(classe) {
    option = document.createElement('option')
    classe.appendChild(option)
}

criarP(dados)
p.innerHTML = 'Número (entre 1 e 100): '

criarInput(p)
input.setAttribute('type', 'number')
input.setAttribute('class', 'input')

criarButton(p)
button.innerHTML = 'Adicionar'
button.setAttribute('class', 'adicionar')
button.setAttribute('onclick', 'adicionar()') // Função logo abaixo

criarP(dados)

criarSelect(p)

criarButton(p)
button.innerHTML = 'Finalizar'
button.setAttribute('class', 'finalizar')
button.setAttribute('onclick', 'finalizar()') // Função mais abaixo
    // Fim da criação de tags

function adicionar() {
    numero = document.querySelector('.input')

    function validarAdicionarInput() {
        if (!numero.value) {
            alert('O campo número deve ser preenchido')
        } else if (numero.value < 1 || numero.value > 100) {
            alert('O número deve ser um valor entre 1 e 100')
        } else if (numeroArray.indexOf(Number(numero.value)) != -1) {
            alert(`O número ${numero.value} já está relacionado na lista. \nPor favor, insira outro número`)
        } else {
            numeroArray.push(Number(numero.value))
            criarSelectOption(select)
            option.innerHTML += `Valor ${numero.value} adicionado.`
        }
        res.innerHTML = ' '
    }
    validarAdicionarInput()
    numero.value = ''
    numero.focus()
}

function finalizar() {
    let tamanho = numeroArray.length
    let crescente = numeroArray.sort(
        function(a, b) { // Em arrow function: (a,b) => a-b 
            return a - b
        }
    )
    let soma = 0

    if (!tamanho) {
        alert('É necessário inserir valores acima antes de finalizar!')

    } else {
        for (i = 0; i < tamanho; i++) {
            soma = soma + numeroArray[i]
        }

        criarP(res)
        p.innerHTML += `Ao todo temos ${tamanho} números cadastrados.`
        criarP(res)
        p.innerHTML += `O maior valor informado foi ${crescente[tamanho-1]}.`
        criarP(res)
        p.innerHTML += `O menor valor informado foi ${crescente[0]}.`
        criarP(res)
        p.innerHTML += `Somando todos os valores, temos ${soma}.`
        criarP(res)
        p.innerHTML += `A média dos valores digitados é ${Math.round(soma / tamanho)}.`
    }
}