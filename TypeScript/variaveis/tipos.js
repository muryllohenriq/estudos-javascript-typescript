"use strict";
// hierarquia de tipos: https://pbs.twimg.com/media/EudXrbDXUAQPV2P?format=jpg&name=medium
// type annotation = é os dois pontos ':' seguido do tipo especificado
// => Variáveis
let nome = "Muryllo";
console.log(nome);
// => Arrays - Lista de coisas
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// => Objetos - É uma coisa, é literalmente o nome, um objeto
let carro;
carro = { nome: "Gol", ano: 2000, preco: 10000 };
console.log(carro);
// => Função
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(multiplicar(2, 3));
// bigint: números inteiros até ou maiores que 2 elevado a 53
let big1 = 9007199254740991n;
console.log(big1);
console.log(typeof (big1));
// Tuple - Os dados devem respeitar a ordem dos seus tipos.
const endereco = ['Rua dos alfeneiros', 4, 'Whinging'];
console.log(`Tipo tuple: ${typeof endereco} (${endereco})`);
// Never
// function lancaExcecao():never {
//     throw new Error('Testando tipo never')
// }
// Chama-se never por que esta função nunca é executada, graças ao erro que para tudo.
// const nunca = lancaExcecao()
// console.log(`Tipo never: ${typeof nunca} (${nunca})`);
// Enum
var Status;
(function (Status) {
    Status["Pendente"] = "A";
    Status["Processando"] = "B";
    Status["Processado"] = "C";
})(Status || (Status = {}));
;
const situacao1 = Status.Pendente;
const situacao2 = Status.Processando;
console.log(`Tipo Enum: ${typeof situacao1} (${situacao1})`);
console.log(`Tipo Enum: ${typeof situacao2} (${situacao2})`);
const mudaStatus = (preStatus) => {
    let posStatus;
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
};
const novoStatus = mudaStatus(situacao1);
console.log(`Tipo Enum: ${typeof novoStatus} (${novoStatus})`);
const cliente1 = {
    nome: 'Muryllo',
    sobrenome: 'Henrique'
};
const produto1 = {
    descricao: 'Ótimos fones',
    preco: 1.500,
    vendido: false
};
function mostrarObjeto(objeto) {
    console.log(objeto);
    return objeto;
}
mostrarObjeto(cliente1);
mostrarObjeto(produto1);
// Type assertion = apenas trata como se fosse de um determinado tipo
const valor = 123;
console.log(`Type assertion: ${typeof valor} (${valor})`);
const valorStr = valor; // constata que é uma string e pra tratar com uma string, mas não muda o tipo, e o typescript influencia apenas no tempo de condificação e não no tempo de execução
console.log(`Type assertion: ${typeof valorStr} (${valorStr})`);
let valores = ['texto1', 123, true, []];
valores[0] = 123;
let valoresTuple = valores;
valoresTuple[0] = '123';
const criaSerVivo = (nome, idade, dtObito) => {
    return {
        nome: nome,
        idade: idade,
        dtObito: dtObito,
        morre(data) {
            this.dtObito = data;
        }
    };
};
const criaVegetal = (serVivo, localizacao) => {
    let vegetal = serVivo;
    vegetal.localizacao = localizacao;
    return vegetal;
};
const criaAnimal = (serVivo, peso) => {
    let animal = serVivo;
    animal.peso = peso;
    return animal;
};
let person = criaSerVivo('eu', 1);
person = criaAnimal(person, 3);
console.log(typeof person);
let flor = criaSerVivo('rosa', 27);
flor = criaVegetal(flor, { latitude: 3, longitude: 4 });
console.log(typeof flor);
class Ser {
    constructor(nome, idade) {
        this.nome = nome; // this. pra instanciar o que está fora do método, sem o this. propriedades que estão dentro do método
        this.idade = idade;
    }
    morre(data) {
        this.dtObito = data;
    }
}
// const ser = new Ser('oi', 10);
// ser.morre(new Date())
class serAnimal {
    constructor(serVivo, peso) {
        this.nome = serVivo.nome;
        this.idade = serVivo.idade;
        this.peso = peso;
    }
    morre(data) {
        this.dtObito = data;
    }
}
class serVegetal {
    constructor(serVivo, localizacao) {
        this.nome = serVivo.nome;
        this.idade = serVivo.idade;
        this.localizacao = localizacao;
    }
    morre(data) {
        this.dtObito = data;
    }
}
const serGato = new Ser('beto', 1);
const gato = new serAnimal(serGato, 3);
const serMargarida = new Ser('margarida', 1);
const margarida = new serVegetal(serMargarida, { latitude: 5, longitude: 2 });
gato.morre(new Date());
margarida.morre(new Date());
console.log(gato);
console.log(margarida);
