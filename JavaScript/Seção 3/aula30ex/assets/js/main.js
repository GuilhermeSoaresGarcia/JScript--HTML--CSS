function meuEscopo() {
    const dataDiv = document.querySelector('.container h1');
    const data = new Date();

    function zeroAEsquerda(num) {
        //return num >= 10 ? num : `0${num}`;
        if (num >= 10) {
            return num
        } else {
            return num = `0${num}`
        };
    }

    let dataDia = data.getDay();
    let dataDiaExtenso;

    switch (dataDia) {
        case 0:
            dataDiaExtenso = 'Domingo'
            break
        case 1:
            dataDiaExtenso = 'Segunda-feira'
            break
        case 2:
            dataDiaExtenso = 'Terça-feira'
            break
        case 3:
            dataDiaExtenso = 'Quarta-feira'
            break
        case 4:
            dataDiaExtenso = 'Quinta-feira'
            break
        case 5:
            dataDiaExtenso = 'Sexta-feira'
            break
        case 6:
            dataDiaExtenso = 'Sábado'
            break
    }

    let dataMes = data.getMonth();
    let dataMesExtenso;

    switch (dataMes) {
        case 0:
            dataMesExtenso = 'janeiro'
            break
        case 1:
            dataMesExtenso = 'fevereiro'
            break
        case 2:
            dataMesExtenso = 'março'
            break
        case 3:
            dataMesExtenso = 'abril'
            break
        case 4:
            dataMesExtenso = 'maio'
            break
        case 5:
            dataMesExtenso = 'junho'
            break
        case 6:
            dataMesExtenso = 'julho'
            break
        case 7:
            dataMesExtenso = 'agosto'
            break
        case 8:
            dataMesExtenso = 'setembro'
            break
        case 9:
            dataMesExtenso = 'outubro'
            break
        case 10:
            dataMesExtenso = 'novembro'
            break
        case 11:
            dataMesExtenso = 'dezembro'
            break
    }

    dataDiv.innerHTML = `${dataDiaExtenso}, ${data.getDate()} de ${dataMesExtenso} de ${data.getFullYear()}, ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;

}

meuEscopo();


// const h1 = document.querySelector('.container h1');
// const dataExtraida = new Date();
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short'
// }
// h1.innerHTML = dataExtraida.toLocaleDateString('pt-BR', opcoes);