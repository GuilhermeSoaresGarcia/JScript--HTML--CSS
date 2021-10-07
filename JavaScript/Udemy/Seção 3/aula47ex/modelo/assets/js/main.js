function criaHoraDosSegundos(segundos) { // Essa função usa o objeto Date com a "era Unix" como dado inicial
    const data = new Date(segundos * 1000) // Multiplica-se a variável por 1000 pois o tempo é dado em milisegundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' // Como o locale é pt-BR, deve-se alterar a timezone para GMT ou UTC pois nosso fuso é -3
    })
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() { // Esta função atualiza a cada 1s 
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

// Esse trecho seria para economizar processamento, mas achei confuso para este primeiro momento.

// document.addEventListener('click',
//     function(e) {
//         const el = e.target;

//         if (el.classList.contains('zerar') {
//                 console.log('Voce clicou em zerar');
//         }
//                 console.log(el);

//             })
//     )


iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado'); // Remove a classe "pausado" da tag p dentro do relógio
    clearInterval(timer);
    iniciaRelogio();
})

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado'); // Adiciona a classe "pausado" da tag p dentro do relógio
    clearInterval(timer);
})

zerar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
})