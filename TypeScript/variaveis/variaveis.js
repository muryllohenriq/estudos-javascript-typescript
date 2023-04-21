"use strict";
// hierarquia de tipos: https://pbs.twimg.com/media/EudXrbDXUAQPV2P?format=jpg&name=medium
// type annotation = :number, :string
// => Variáveis [Type Annotations]
let nome = "Muryllo";
console.log(nome);
// => Arrays [Type Annotations] - Lista de coisas
let numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// => Objetos [Type Annotations] - É uma coisa, é literalmente o nome, um objeto
let carro;
carro = { nome: "Gol", ano: 2000, preco: 10000 };
console.log(carro);
// => Função [Type Annotations]
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
