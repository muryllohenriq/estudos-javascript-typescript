// FizzBuzz
// Divisível por 3 => 'Fizz',
// Divisível por 5 => 'Buzz',
// Divisível por 3 e 5 => 'FizzBuzz',
// Se não for um número => 'Não é um número'
// Se não for divisível nem por 3 e nem por 5 => Entrada

let resultado = fizzBuzz(3)
console.log(resultado)

function fizzBuzz (entrada) {
    if (typeof entrada !== 'number') 
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0)) 
        return 'FizzBuzz';
    if (entrada % 3 === 0) 
        return 'fizz';
    if (entrada % 5 === 0) 
        return 'Buzz' 
        
    return entrada
}

// Reverse a string
let newStr = '';

function reverseAString(str) {
    for (let i = str.length - 1; i >=0; i--) {
        newStr += str[i];
    }
    console.log(newStr);
}

let resultado = reverseAString('Hello')

// Convert Celsius to Fahrenheit

function convertToFahrenheit(value) {
    return value * 1.8 + 32
}

let result = convertToFahrenheit(40)
console.log(`O valor em Fahrenheit é ${result}`)

function media(a, b, c) {
  let res = (a + b + c) / 3;
  if (res >= 7) {
    return "Aprovado";
  } else if (res >= 5 && res < 7) {
    return "Recuperação";
  } else return "Reprovado";
}

console.log(media(5, 10, 10));

function maioridade(idade) {
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade'
}

console.log(maioridade(9))

// arrow function
const soma = (num1, num2) => num1 + num2

const sayHello = name => `Hello ${name}`

console.log(sayHello('muliro'))

const alunasGama = ['Paula', 'Maria', 'Estela', 'Clara']
// Acessar informações em um array
console.log(alunasGama[3])

// Operador spread (...)
const alunasXp = [...alunasGama, 'Simara']
console.log(alunasXp)

for(let i = 0; i < alunasXp.length; i++) {
    console.log(alunasXp[i])
}

map
const alunas = ['Paula', 'Maria', 'Estela', 'Clara']
alunas.map(aluna => console.log(aluna))

filter
const numeros = [34, 35, 67, 90, 55, 76]
const numerosImpares = numeros.filter(numero => numero%2 != 0)
console.log(numerosImpares)

find 
const produtos = ['geladeira', 'fogao', 'cama', 'mesa']
const encontra = produtos.find(produto => produto === 'cama')
console.log(encontra)

sort
const num = [34, 45, 76, 90, 55, 110]
const crescente = num.sort((a,b) => a-b)
console.log(crescente)
const decrescente = num.sort((a,b) => b-a)
console.log(decrescente)

reduce
const numbers = [1, 44, 55]
const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}) 
console.log(soma)

const pessoa = {
    nome: 'muliro',
    idade: 19,
    cidade: 'Catalao'
}
// notação de ponto
console.log(pessoa.nome)
// notação de colchetes
console.log(pessoa['idade'])
// como desestruturar Objetos
const {nome, idade, cidade} = pessoa
console.log(nome)
console.log(idade)
console.log(cidade)

const filmes = [
    { 
        id: 1,
        titulo: 'Dilema das Redes',
        descricao: 'Um documentario sobre tecnologia.',
        duracao: 120
    },
    {
        id: 2,
        titulo: 'Us',
        descricao: 'Um filme de terror legal demais.',
        duracao: 120
    },
    {
        id: 3,
        titulo: 'Corra',
        descricao: 'Um filme de suspense bem legal.',
        duracao: 120
    }
]
const [{id, titulo, descricao, duracao}] = filmes
filmes.map(filme => console.log(filme.descricao))