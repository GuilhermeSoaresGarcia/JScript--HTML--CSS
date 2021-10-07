let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é o ${num[0]}`)

// for (i = 0; i < num.length; i++) {
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
// }


for (indice in num) {
    console.log(`A posição ${indice} tem o valor ${num[indice]}`)
}