// hierarquia de tipos: https://pbs.twimg.com/media/EudXrbDXUAQPV2P?format=jpg&name=medium

// type annotation = :number, :string

// => Variáveis [Type Annotations]
let nome: string = "Muryllo"
console.log(nome);

// => Arrays [Type Annotations]
let numeros: number[] = [1,2,3,4,5]
console.log(numeros);

// => Objetos [Type Annotations]
let carro: {
    nome: string,
    ano: number,
    preco: number
};

carro = { nome: "Gol", ano: 2000, preco: 10000}
console.log(carro);

// => Função [Type Annotations]
function multiplicar(num1: number, num2: number):number {
    return num1 * num2
}
console.log(multiplicar(2,3));

// bigint: números inteiros até ou maiores que 2 elevado a 53
let big1: bigint = 9007199254740991n;
console.log(big1);
console.log(typeof(big1));

