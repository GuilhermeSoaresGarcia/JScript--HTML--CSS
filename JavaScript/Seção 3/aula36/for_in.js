// For in -> lê os índices ou chaves do objeto

const frutas = ['Maçãs', 'Peras', 'Uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(i)
// }

for (let indice in frutas) { // Ao contrário do código de contagem dos índices (conforme acima)
    console.log(frutas[indice]) // "for in" lê todos os objetos ou índices (apesar de parecer a mesma coisa no caso presente)
}


const pessoa = [{
        nome: 'Guilherme',
        sobrenome: 'Soares',
        idade: 37
    }, {
        nome: 'Marina',
        sobrenome: 'Garcia',
        idade: 38
    },
    {
        nome: 'Antonio Carlos',
        sobrenome: 'Martins',
        idade: 69
    }
]

for (let chave in pessoa) {
    console.log(pessoa[chave])
}