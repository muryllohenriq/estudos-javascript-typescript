// pegar o input
//Se for sim, mostra as categorias disponíveis, pergunta qual categoria ela escolhe
//Se não, mostra todos os livros em ordem crescente por quantidade de páginas

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponíveis:')
    console.log('Produtividade', '/História Brasileira', '/Américas', '/Estilo de vida', '/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria voce escolhe?')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todas os livros disponíveis:')
    console.table(livrosOrdenados)
}