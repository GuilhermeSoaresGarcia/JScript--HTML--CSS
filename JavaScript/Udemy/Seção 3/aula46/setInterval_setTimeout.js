function mostraHora() { //Esta função mostra a hora atual com hh:mm:ss
    let hora = new Date()
    return hora.toLocaleTimeString('pt-BR', { // toLocaleString para mostrar dd/mm/aaaa
        hour12: false
    })

}

let timer = setInterval(function() { // Esta função atualiza a cada 1s 
    console.log(mostraHora());
}, 1000);

setTimeout(function() { // Define um intervalo para a função acima
    clearInterval(timer);
}, 10000);