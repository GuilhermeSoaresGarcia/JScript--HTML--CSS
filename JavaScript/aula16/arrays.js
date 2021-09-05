const alunos = ['Guilherme', 'Marina', 'Angelica', 'Dante'];
alunos[alunos.length] = 'Juvenal'; // É possível adicionar um indice novo dessa forma...
alunos.push('Fábio'); // ...ou usando essa função. Em ambos os casos, isso adiciona ao fim do array
alunos.unshift('Jurema'); // Adiciona ao primeiro índice
removidoFim = alunos.pop(); // Remove o último índice. É possível salvar o elemento removido numa variável
removidoComeco = alunos.shift() // Remove o primeiro índice. É possível salvar o elemento removido numa variável
delete alunos[1]; // Deleta o elemento mas mantém o índice (mostrando "empty item")



// console.log(alunos.length);
console.log(removidoFim);
console.log(removidoComeco);

console.log(alunos);
console.log(alunos.slice(0, 3));
console.log(alunos instanceof Array); // Verifica se é um array