function tabelaImc() { // Encapsulamento
    let form = document.querySelector('.form'); // Selecionar o formulário
    form.addEventListener('submit', function(cancelarEnvio) { // Cancelar o envio do form
        cancelarEnvio.preventDefault() // Cancelar o envio do form

        let resultado = document.querySelector('.resultado'); // Selecionar div resultado

        let peso = form.querySelector('.peso-input'); // Capturar input peso
        let altura = form.querySelector('.altura-input'); // Capturar input altura
        let imc = Number(peso.value / (altura.value ** 2)); // Calcular imc

        imcResult = function(imc) { // Cria função e armazena o resultado do cálculo do imc
            if (imc < 18) {
                return `<div class="resultado-amarelo">Seu IMC é ${imc.toFixed(2)}: Abaixo do peso</div>`;
            } else if (imc >= 18.5 && imc <= 24.9) {
                return `<div class="resultado-verde">Seu IMC é ${imc.toFixed(2)}: Peso normal</div>`;
            } else if (imc >= 25 && imc <= 29.9) {
                return `<div class="resultado-amarelo">Seu IMC é ${imc.toFixed(2)}: Sobrepeso</div>`;
            } else if (imc >= 30 && imc <= 34.9) {
                return `<div class="resultado-vermelho">Seu IMC é ${imc.toFixed(2)}: Obesidade grau 1</div>`;
            } else if (imc >= 35 && imc <= 39.9) {
                return `<div class="resultado-vermelho">Seu IMC é ${imc.toFixed(2)}: Obesidade grau 2</div>`;
            } else if (imc >= 40) {
                return `<div class="resultado-vermelho">Seu IMC é ${imc.toFixed(2)}: Obesidade grau 3</div>`;
            } else
                return ' ';
        }

        resultado.innerHTML = imcResult(imc);

        form.addEventListener('submit', function(campoZerado) { //Evento para campos em branco
            if (peso.value == "" || altura.value == "") { // Se peso ou altura estiverem em branco
                return campoZerado = (resultado.innerHTML = '<div class="resultado-vermelho">Os campos "peso" e "altura" devem ser preenchidos.</div>'); // Escreve na div resultado o texto ao lado
            }
        })

        form.addEventListener('reset', function(limpaResultado) { // Limpa o resultado além dos campos do formulário com o botão Limpar
            limpaResultado.onclick(resultado.innerHTML = ' '); // Limpa o resultado além dos campos do formulário com o botão Limpar
        })
    })
}


tabelaImc();