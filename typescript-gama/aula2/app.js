// class Pessoa {
//   nome: string;
//   idade: number;
//   emprego: string;
//   constructor(nome: string, idade: number, emprego: string) {
//     this.nome = nome;
//     this.idade = idade;
//     this.emprego = emprego;
//   }
//   apresentar() {
//     console.log(
//       `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e trabalho como ${this.emprego}`
//     );
//   }
// }
// const pessoa = new Pessoa("Muryllo", 20, "Dev");
// const pessoa1 = new Pessoa("Richard", 27, "Fugitivo");
// console.log(pessoa.apresentar);
// pessoa.apresentar();
// pessoa1.apresentar();
// console.log(pessoa);
var Carro = /** @class */ (function () {
    function Carro(modelo, marca, portas, cor, velocidade) {
        this.modelo = modelo;
        this.marca = marca;
        this.portas = portas;
        this.cor = cor;
        this.velocidade = velocidade;
    }
    Carro.prototype.buzinar = function () {
        console.log("Voc\u00EA buzinou o seu ".concat(this.modelo, ", da marca ").concat(this.marca, " com ").concat(this.portas, " portas, da cor ").concat(this.cor));
    };
    Carro.prototype.acelerar = function () {
        console.log("Sua velocidade \u00E9 de ".concat(this.velocidade + 10, " km/h"));
    };
    Carro.prototype.parar = function () {
        console.log("Voc\u00EA est\u00E1 parado, sua velocidade \u00E9 ".concat(this.velocidade = 0, " km/h"));
    };
    return Carro;
}());
var carro = new Carro("Ferrari", "Ferrari", 2, "Vermelho", 200);
var carro2 = new Carro("Ford", "Ford", 4, "Preto", 400);
console.log(carro2.acelerar());
// type PessoaProps = {
//   nome: string;
//   idade: number;
//   emprego: string;
// };
// function apresentar(pessoa: PessoaProps) {
//   console.log(
//     `Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e trabalho como ${pessoa.emprego}`
//   );
// }
// const pessoa = {
//   nome: "Muryllo",
//   idade: "20",
//   emprego: "Dev Front-End",
// };
// const pessoa1 = {
//   nome: "Ana",
//   idade: "21",
//   emprego: "Dev Back-End",
// };
// apresentar(pessoa);
// apresentar(pessoa1);
