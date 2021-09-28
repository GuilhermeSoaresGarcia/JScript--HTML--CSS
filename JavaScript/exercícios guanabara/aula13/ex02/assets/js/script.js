function verificarIdade() {
    let inputAnoNasc = document.getElementById('anoNasc')
    let anoNasc = Number(inputAnoNasc.value)
    let genero = document.getElementsByName('genero')
    let res = document.querySelector('.texto')
    let img = document.querySelector('.imagem')
    let data = new Date()
    let ano = Number(data.getUTCFullYear())

    if (!anoNasc || anoNasc > ano) {
        alert(`Ano inválido, verifique os dados e tente novamente!`)
    } else {
        function alterarElementos() {
            let idade = ano - anoNasc
            if (genero[0].checked) {
                if (idade < 4) {
                    res.innerHTML = `Detectamos gênero feminino com ${idade} anos.`
                    img.style.backgroundImage = "url('./assets/img/fem_baby.jpeg')"
                } else if (idade < 14) {
                    res.innerHTML = `Detectamos gênero feminino com ${idade} anos.`
                    img.style.backgroundImage = "url('./assets/img/fem_child.jpeg')"
                } else if (idade < 31) {
                    res.innerHTML = `Detectamos gênero feminino com ${idade} anos.`
                    img.style.backgroundImage = "url('./assets/img/fem_young.jpeg')"
                } else if (idade < 60) {
                    res.innerHTML = `Detectamos gênero feminino com ${idade} anos.`
                    img.style.backgroundImage = "url('./assets/img/fem_adult.jpeg')"
                } else {
                    res.innerHTML = `Detectamos gênero feminino  com ${idade} anos.`
                    img.style.backgroundImage = "url('./assets/img/fem_old.jpeg')"
                }
            } else if (genero[1].checked) {
                if (idade < 4) {
                    res.innerHTML = `Detectamos gênero masculino com ${idade} anos.`
                    img.style.backgroundImage = "url('./assets/img/masc_baby.jpeg')"
                } else if (idade < 14) {
                    res.innerHTML = `Detectamos gênero masculino com ${idade} anos.`
                    img.style.backgroundImage = "url('./assets/img/masc_child.jpeg')"
                } else if (idade < 31) {
                    res.innerHTML = `Detectamos gênero masculino com ${idade} anos.`
                    img.style.backgroundImage = "url('./assets/img/masc_young.jpeg')"
                } else if (idade < 60) {
                    res.innerHTML = `Detectamos gênero masculino com ${idade} anos.`
                    img.style.backgroundImage = "url('./assets/img/masc_adult.jpeg')"
                } else {
                    res.innerHTML = `Detectamos gênero masculino com ${idade} anos.`
                    img.style.backgroundImage = "url('./assets/img/masc_old.jpeg')"
                }
            }

        }
    }
    alterarElementos()
}