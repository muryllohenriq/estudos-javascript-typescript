// EX 01
// Crie uma classe de calculadora que contenha os seguintes métodos: somar, subtrair, multiplicar e dividir
// Os métodos devem retornar o valor
// Em seguida crie uma instância da sua calculadora e execute as operações
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Automovel = /** @class */ (function () {
    function Automovel(marca, modelo, quantidadeRodas, velocidade) {
        this.marca = marca;
        this.modelo = modelo;
        this.quantidadeRodas = quantidadeRodas;
        this.velocidade = velocidade;
    }
    return Automovel;
}());
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(quantidadePortas, marca, modelo, quantidadeRodas, velocidade) {
        var _this = _super.call(this, marca, modelo, quantidadeRodas, velocidade) || this;
        _this.quantidadePortas = quantidadePortas;
        return _this;
    }
    return Carro;
}(Automovel));
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, quantidadeRodas, velocidade) {
        return _super.call(this, marca, modelo, quantidadeRodas, velocidade) || this;
    }
    return Moto;
}(Automovel));
var camaro = new Carro(2, 'Chevrolet', 'Camaro', 4, 100);
var biz = new Moto('Honda', 'Biz', 2, 140);
console.log(camaro);
console.log(biz);
