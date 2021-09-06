let numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const numeroTexto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
numeroTexto.innerHTML = ' ';
numeroTexto.innerHTML += `<p>1. Raiz quadrada: ${Math.sqrt(numero)}</p>`;
numeroTexto.innerHTML += `<p>2. ${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
numeroTexto.innerHTML += `<p>3. É NaN: ${isNaN(numero)}</p>`;
numeroTexto.innerHTML += `<p>4. Arredondado para baixo: ${Math.floor(numero)}</p>`;
numeroTexto.innerHTML += `<p>5. Arredondado para cima: ${Math.ceil(numero)}</p>`;
numeroTexto.innerHTML += `<p>6. Com duas casas decimais: ${numero.toFixed(2)}</p>`;