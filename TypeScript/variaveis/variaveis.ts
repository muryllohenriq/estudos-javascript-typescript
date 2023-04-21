// hierarquia de tipos: https://pbs.twimg.com/media/EudXrbDXUAQPV2P?format=jpg&name=medium

// type annotation = :number, :string

// => Variáveis [Type Annotations]
let nome: string = "Muryllo"
console.log(nome);

// => Arrays [Type Annotations] - Lista de coisas
let numeros: number[] = [1,2,3,4,5]
console.log(numeros);

// => Objetos [Type Annotations] - É uma coisa, é literalmente o nome, um objeto
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

// Tuple - Os dados devem respeitar a ordem dos seus tipos.
const endereco: [string, number, string] = ['Rua dos alfeneiros', 4, 'Whinging']
console.log(`Tipo tuple: ${typeof endereco} (${endereco})`);

// Never
// function lancaExcecao():never {
//     throw new Error('Testando tipo never')
// }

// Chama-se never por que esta função nunca é executada, graças ao erro que para tudo.
// const nunca = lancaExcecao()
// console.log(`Tipo never: ${typeof nunca} (${nunca})`);

// Enum

enum Status {
    Pendente = 'A',
    Processando = 'B',
    Processado = 'C'
};

const situacao1: Status = Status.Pendente;
const situacao2: Status = Status.Processando;

console.log(`Tipo Enum: ${typeof situacao1} (${situacao1})`);
console.log(`Tipo Enum: ${typeof situacao2} (${situacao2})`);

const mudaStatus = (preStatus: Status): Status => {
    let posStatus: Status;
    switch(preStatus) {
        case Status.Pendente:
            posStatus = Status.Processando;
            break;
            case Status.Processando:
                posStatus = Status.Processado;
                break;
                default:
                    posStatus = Status.Pendente;
    }

    return posStatus;
}

const novoStatus = mudaStatus(situacao1);
console.log(`Tipo Enum: ${typeof novoStatus} (${novoStatus})`);