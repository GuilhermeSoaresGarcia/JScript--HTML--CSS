// Não podemos criar variáveis com palavras reservadas
let
if;

// Variáveis devem ter nomes significativos 
let n = 'João' // Isso deve ser evitado (o que significa "n"?)
let nomeCliente = 'João' // Prefira algo mais explícito
    // Não pode começar variável com número
let 1 nome;
// Não podem conter espaços ou traços
let nome - cliente; // Vai dar erro
let nomeCliente; // Utilize "camelCase" - primeira palavra minúscula, demais com capitula maiúscula
// Variáveis são case sensitive 
let nomeCliente = !nomecliente;

// Não podemos redeclarar variáveis com let, podemos apenas alterar seu valor
/**********************************
***********************************
   NÃO UTILIZE VAR, UTILIZE LET
***********************************
**********************************/
let nome; // Declaração
nome = 'Guilherme'; // Inicialização da variável


console.log('O nome é do protagonista é', nome);
console.log(nome, 'é burro, feio e solteiro - obviamente.');
console.log('Além disso,', nome, 'é pobre e depressivo.');
console.log('Ele,', nome, 'não vê grandes perspectivas para o seu futuro, mas está se divertindo com a possibilidade de programar em home office.');

nome = 'Seu bosta';
console.log('O nome é do protagonista é', nome);
console.log(nome, 'é burro, feio e solteiro - obviamente.');
console.log('Além disso,', nome, 'é pobre e depressivo.');
console.log('Ele,', nome, ', não vê grandes perspectivas para o seu futuro, mas está se divertindo com a possibilidade de programar em home office.');