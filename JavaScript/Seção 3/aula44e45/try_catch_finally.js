try { // Executado quando não há erros
    teste
} catch { // Executado quando não há erros, mensagem de erro personalizada 
    console.log('Deu erro...')
} finally { // Mensagem executada com ou sem erro
    console.log('...mas segue o baile!')
}