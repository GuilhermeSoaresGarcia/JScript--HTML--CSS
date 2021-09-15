function meuEscopo() {
    const form = document.querySelector('.form'); // Seleciona o form com class "form"
    const resultado = document.querySelector('.resultado'); // Seleciona a div "resultado"

    const pessoas = []; // Cria o array "pessoas"

    // form.onsubmit = function(evento) {   // Impede o refresh da página
    //     evento.preventDefault();         // Impede o refresh da página
    // };

    function recebeEventoForm(evento) { // Outro modo de impedir o refresh da página
        evento.preventDefault(); // Outro modo de impedir o refresh da página

        const nome = form.querySelector('.nome'); // Puxa o class "nome" do form e armazena na const nome
        const sobrenome = form.querySelector('.sobrenome'); // Puxa o class "sobrenome" do form e armazena na const sobrenome
        const peso = form.querySelector('.peso'); // Puxa o class "peso" do form e armazena na const peso
        const altura = form.querySelector('.altura'); // Puxa o class "altura" do form e armazena na const altura

        pessoas.push({ // Inclusão de índice no array
            nome: nome.value, // Adiciona os valores preenchidos em cada um dos parâmetros
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas); // Para verificar no console do navegador

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value}, ${altura.value}</p>` // Exibe na div resultado os registros q foram armazenados no array

    }

    form.addEventListener('submit', recebeEventoForm);

}

meuEscopo();