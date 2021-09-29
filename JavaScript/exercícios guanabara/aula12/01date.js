let data = new Date()
let horas = data.getHours()
let minutos = data.getMinutes()


function saudar() {
    if (horas < 12) {
        console.log('Bom dia!')
    } else if (horas < 19) {
        console.log('Boa tarde!')
    } else {
        console.log('Boa noite!')
    }
}

console.log(`Agora são ${horas} horas e ${minutos} minutos.`)
saudar();