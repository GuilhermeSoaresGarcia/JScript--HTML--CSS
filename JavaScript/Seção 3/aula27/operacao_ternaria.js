// (condição ? 'Valor para true' : 'Valor para false';

const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';
console.log(nivelUsuario);

/* Substitui "if/else" deste tipo:
if (pontuacaoUsuario >= 1000) {
console.log('Usuário VIP');
} else {
    console.log('Usuário normal')
}
*/


// Se determinada condição for falsa, retorna um valor padrão

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
console.log(corPadrao);