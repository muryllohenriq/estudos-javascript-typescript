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

class Carro {
    modelo: string;
    marca: string;
    portas: number;
    cor: string;
    velocidade: number;
  
    constructor(modelo: string, marca:string, portas: number, cor: string, velocidade: number) {
      this.modelo = modelo;
      this.marca = marca;
      this.portas = portas;
      this.cor = cor;
      this.velocidade = velocidade;
    }

    buzinar() {
      console.log(
        `Você buzinou o seu ${this.modelo}, da marca ${this.marca} com ${this.portas} portas, da cor ${this.cor}`
      );
    }
    acelerar() {
        console.log(
            `Sua velocidade é de ${this.velocidade + 10} km/h`
        );
    }
    parar() {
        console.log(
            `Você está parado, sua velocidade é ${this.velocidade=0} km/h`
        );  
    }
  }
  
  const carro = new Carro("Ferrari", "Ferrari", 2, "Vermelho", 200);
  const carro2 = new Carro("Ford", "Ford", 4, "Preto", 400);
  
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
