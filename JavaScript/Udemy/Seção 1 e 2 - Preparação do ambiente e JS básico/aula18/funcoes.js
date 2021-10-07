// function criaPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome, // Quando o parâmetro é igual ao elemento, não é necessário digitar "parametro: parametro" bastaria digitar "parametro"
//         sobrenome: sobrenome,
//         idade: idade
//     }
// }

function criaPessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,

        mostra() {
            console.log(`Nome: ${this.nome}, Sobrenome: ${this.sobrenome}`);
        },

        // incrementaIdade() {
        //     ++this.idade;
        // }
    }
}



const pessoa1 = criaPessoa('Guilherme', 'Garcia', 37)
const pessoa2 = criaPessoa('Marina', 'Garcia', 38)
const pessoa3 = criaPessoa('Angelica', 'Garcia', 66)


pessoa1.mostra();
pessoa2.mostra();
pessoa3.mostra();