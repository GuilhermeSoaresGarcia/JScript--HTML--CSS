// console.log('Linha 0')
// console.log('Linha 1')
// console.log('Linha 2')
// console.log('Linha 3')
// console.log('Linha 4')
// console.log('Linha 5')

// i = index (como padrão se utiliza isso)
// Condição inicial; condição final; incremento

for (let i = 0; i <= 100; i += 10) {
    console.log(`Linha ${i}`);
}

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'ímpar';
    console.log(i, par);
}


const frutas = ['Maçã', 'Pera', 'Bananas', 'Uvas', 'Melão', 'Laranja', 'Pitaya'];
for (let i = 0; i < frutas.length; i++) {
    console.log(`Fruta: ${frutas[i]}`)
}