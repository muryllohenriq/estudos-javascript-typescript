// EX 01
// Crie uma classe de calculadora que contenha os seguintes métodos: somar, subtrair, multiplicar e dividir
// Os métodos devem retornar o valor
// Em seguida crie uma instância da sua calculadora e execute as operações

// class calculadora {
//   somar(a: number, b: number): number {
//     return a + b;
//   }
//   subtrair(a: number, b: number) {
//     return a - b;
//   }
//   multiplicar(a: number, b: number) {
//     return a * b;
//   }
//   dividir(a: number, b: number) {
//     return a / b;
//   }
// }

// const minhaCalculadora = new calculadora();
// console.log(minhaCalculadora.somar(1, 3));
// console.log(minhaCalculadora.subtrair(1, 3));
// console.log(minhaCalculadora.multiplicar(1, 3));
// console.log(minhaCalculadora.dividir(1, 3));

// EX 02
// Crie uma classe chamada carro com os seguintes atributos: marca, modelo, quantidade de rodas, quantidade de portas e velocidade
// Crie uma segunda classe chamada moto com os seguintes atributos: marca, modelo, quantidade de rodas e velocidade
// Note que alguns atributos podem ser separados em uma classe mãe, como ficaria essa separação?

class Automovel {
    marca: string;
    modelo: string;
    quantidadeRodas: number;
    velocidade: number;

    constructor (marca:string, modelo:string, quantidadeRodas: number, velocidade: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.quantidadeRodas = quantidadeRodas;
        this.velocidade = velocidade
    }
}

class Carro extends Automovel {
    quantidadePortas: number;
    
    constructor (quantidadePortas: number, marca: string, modelo: string, quantidadeRodas:number, velocidade:number) {
        super(marca, modelo, quantidadeRodas, velocidade)
        this.quantidadePortas = quantidadePortas
    }
}

class Moto extends Automovel {
    constructor (marca: string, modelo: string, quantidadeRodas:number, velocidade:number) {
        super(marca, modelo, quantidadeRodas, velocidade)
    }
}

const camaro = new Carro(2, 'Chevrolet', 'Camaro', 4, 100)
const biz = new Moto('Honda', 'Biz', 2, 140)

console.log(camaro);
console.log(biz);

