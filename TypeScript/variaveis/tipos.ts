// hierarquia de tipos: https://pbs.twimg.com/media/EudXrbDXUAQPV2P?format=jpg&name=medium

// type annotation = é os dois pontos ':' seguido do tipo especificado

// => Variáveis
let nome: string = "Muryllo"
console.log(nome);

// => Arrays - Lista de coisas
let numeros: number[] = [1, 2, 3, 4, 5]
console.log(numeros);

// => Objetos - É uma coisa, é literalmente o nome, um objeto
let carro: {
    nome: string,
    ano: number,
    preco: number
};

carro = { nome: "Gol", ano: 2000, preco: 10000 }
console.log(carro);

// => Função
function multiplicar(num1: number, num2: number): number {
    return num1 * num2
}
console.log(multiplicar(2, 3));

// bigint: números inteiros até ou maiores que 2 elevado a 53
let big1: bigint = 9007199254740991n;
console.log(big1);
console.log(typeof (big1));

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
    switch (preStatus) {
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

// Type Alias

type Cliente = {
    nome: string,
    sobrenome: string
}

type Produto = {
    descricao: string,
    preco: number,
    vendido: boolean
}

const cliente1: Cliente = {
    nome: 'Muryllo',
    sobrenome: 'Henrique'
}

const produto1: Produto = {
    descricao: 'Ótimos fones',
    preco: 1.500,
    vendido: false
}

function mostrarObjeto(objeto: Cliente | Produto): Cliente | Produto {
    console.log(objeto);
    return objeto
}

mostrarObjeto(cliente1)
mostrarObjeto(produto1)

// Type assertion = apenas trata como se fosse de um determinado tipo

const valor: any = 123;
console.log(`Type assertion: ${typeof valor} (${valor})`);
const valorStr = (valor as string); // constata que é uma string e pra tratar com uma string, mas não muda o tipo, e o typescript influencia apenas no tempo de condificação e não no tempo de execução
console.log(`Type assertion: ${typeof valorStr} (${valorStr})`);

let valores = ['texto1', 123, true, []];
valores[0] = 123;
let valoresTuple = (valores as [string, number, boolean, never[]]);
valoresTuple[0] = '123';

// Interface = muito parecido com Type Alias, porém tem suas diferenças. type não pode ser modificado, interfaces sim, são muito mais reaproveitáveis. Interfaces são apenas uma definição de como uma coisa deve ser/é. O que se coloca em uma interface é público, não pode private nem protected, por isso geralmente nas interfaces temos os métodos e não as propriedades.

interface Localizacao {
    latitude: number
    longitude: number
}

interface SerVivo {
    nome: string
}

interface SerVivo {
    idade: number
}

interface Vegetal extends SerVivo {
    localizacao: Localizacao
}

interface Animal extends SerVivo {
    peso: number
}

const criaSerVivo = (nome: string, idade: number, dtObito?: Date): SerVivo => {
    return {
        nome: nome,
        idade: idade,
        dtObito: dtObito,
        morre(data: Date):void {
            this.dtObito = data
        }
    };
}

const criaVegetal = (serVivo: SerVivo, localizacao: Localizacao): Vegetal => {
    let vegetal = (serVivo as Vegetal);
    vegetal.localizacao = localizacao;

    return vegetal
}

const criaAnimal = (serVivo: SerVivo, peso: number): Animal => {
    let animal = (serVivo as Animal);
    animal.peso = peso;

    return animal;
}

let person = criaSerVivo('eu', 1);
person = criaAnimal(person, 3) as Animal;
console.log(typeof person);

let flor = criaSerVivo('rosa', 27);
flor = criaVegetal(flor, {latitude: 3, longitude: 4}) as Vegetal;
console.log(typeof flor);

// Classes. Já classes falam como uma coisa é e como ela se comporta. Os métodos são comportamentos. Uma classe implemente uma interface

interface SerVivo{
    dtObito?: Date;
    morre(data: Date): void;
}

class Ser implements SerVivo { // implements obriga a class a lidar com as propriedades da interface
    nome: string;
    idade: number;
    dtObito?: Date;

    constructor(nome: string, idade: number) { // class sempre precisa ter um constructor para criar um objeto. constructor é uma função que roda sempre que você cria um novo objeto
        this.nome = nome; // this. pra instanciar o que está fora do método, sem o this. propriedades que estão dentro do método
        this.idade = idade;
    }

    morre(data: Date):void {
        this.dtObito = data
    }
}

// const ser = new Ser('oi', 10);
// ser.morre(new Date())

class serAnimal implements Animal {
    nome: string;
    idade: number;
    dtObito?: Date;
    peso: number;

    constructor(serVivo: SerVivo, peso: number) {
        this.nome = serVivo.nome;
        this.idade = serVivo.idade;
        this.peso = peso
    }

    morre(data: Date):void {
        this.dtObito = data
    }
}

class serVegetal implements Vegetal {
    nome: string;
    idade: number;
    dtObito?: Date;
    localizacao: Localizacao;

    constructor(serVivo: SerVivo, localizacao: Localizacao) {
        this.nome = serVivo.nome;
        this.idade = serVivo.idade;
        this.localizacao = localizacao
    }

    morre(data: Date):void {
        this.dtObito = data
    }
}

const serGato = new Ser('beto', 1);
const gato = new serAnimal(serGato, 3);

const serMargarida = new Ser('margarida', 1);
const margarida = new serVegetal(serMargarida, {latitude: 5, longitude: 2});

gato.morre(new Date());
margarida.morre(new Date());

console.log(gato);
console.log(margarida);

// Herança. Herda tudo da classe pai e pode modificar aquilo que você quiser

class SerAnimal1 extends Ser implements Animal {
    peso: number;

    constructor(nome: string, idade: number, peso: number) {
        super(nome, idade); // o super deve ser o primeiro a ser chamado para preencher a classe pai
        this.peso = peso;
    }
}

class SerVegetal1 extends Ser implements Vegetal {
    localizacao: Localizacao;

    constructor(nome: string, idade: number, localizacao: Localizacao) {
        super(nome, idade); 
        this.localizacao = localizacao;
    }
}

const galinha = new SerAnimal1('galinha', 1, 2);
const katniss = new SerVegetal1('katniss', 17, {latitude: 1, longitude: 2});

galinha.morre(new Date());
katniss.morre(new Date());

console.log(galinha);
console.log(katniss);

// Modificadores de acesso

interface SerVivo2 {
    morre(data: Date): void
}

interface Vegetal2 extends SerVivo2 {
    localizacao: Localizacao
}

interface Animal2 extends SerVivo2 {
    peso: number
}

class Ser2 implements SerVivo2 {
    dtObito?: Date;

    constructor(private nome: string, protected idade: number) { // private = só pode ser usado dentro das chaves, nem nas classes que herdarem essa classe; protected = pode ser usado na classe e nos seus filhos apenas.
    }

    morre(data: Date): void{
        this.dtObito = data;
    }

    mudaNome(nome: string) { // com uma função da pra você alterar o valor do private de fora
        this.nome = nome;
    }
}

class SerAnimal2 extends Ser2 implements Animal2 {
    peso: number;
    
    constructor(nome: string, idade: number, peso: number) {
        super(nome, idade);
        this.peso = peso;
    }
}

class SerVegetal2 extends Ser2 implements Vegetal2 {
    localizacao: Localizacao;

    constructor(localizacao: Localizacao, idade: number, nome: string) {
        super(nome, idade);
        this.localizacao = localizacao;
    }
}

const cachorro = new SerAnimal2('dog', 10, 200);
const prim = new SerVegetal2({latitude: 4, longitude: 10}, 10, 'prim');

cachorro.mudaNome('gato')

cachorro.morre(new Date());
prim.morre(new Date);

console.log(cachorro);
console.log(prim);

