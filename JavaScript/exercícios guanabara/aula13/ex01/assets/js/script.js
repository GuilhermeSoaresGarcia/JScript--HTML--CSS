let body = document.querySelector('body')
let res = document.querySelector('.texto')
let img = document.querySelector('.imagem')

function pegarHora() {
    let data = new Date()
    let horas = data.getHours()
    let minutos = data.getMinutes()

    function alterarElementos() {
        if (horas < 12) {
            body.style.background = 'rgb(140, 190, 240)'
            res.innerHTML = `Bom dia! <br> Agora são ${horas} horas e ${minutos} minutos.`
            img.style.backgroundImage = "url('https://portalrbv.com.br/videira/wp-content/uploads/sites/3/2019/07/image_content_1265345_20180122080514.jpg')"
        } else if (horas < 19) {
            body.style.background = 'rgb(200,160,50)'
            res.innerHTML = `Boa tarde! <br> Agora são ${horas} horas e ${minutos} minutos.`
            img.style.backgroundImage = "url('http://www.pgoiolandotaques.seed.pr.gov.br/redeescola/escolas/25/2010/1846/arquivos/Image/Tarde.jpg')"
        } else {
            body.style.background = 'rgb(10,15,50)'
            res.innerHTML = `Boa noite! <br> Agora são ${horas} horas e ${minutos} minutos.`
            img.style.backgroundImage = "url('https://www.mensagens10.com.br/wp-content/uploads/2013/05/7958573893.jpg')"
        }
    }
    alterarElementos()
}
pegarHora()