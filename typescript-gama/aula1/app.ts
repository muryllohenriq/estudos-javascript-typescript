// const nome: string = 'Muryllo';

// const idade: number = 20;

// const tomaCafe: boolean = true;

// const numeroEndereco: any = '';

// function soma(a:number, b:number): string {
//     const operacao = a + b;
//     return "A soma é: " + operacao;
// }

// const retornoFuncao = soma(1, 2);

// console.log(retornoFuncao, typeof retornoFuncao);

// const frutas: Array<string> = ['banana', 'uva', 'laranja'];

// const pessoa: [string, number, boolean] = ['Murylo', 20, true]

// const pessoa: object = {
// nome: "Muryllo",
// idade: 20,
// };

// let tipo: "filme" | "serie";

// tipo = 'filme'

// function gostoDe(tipo: string): void {
//     console.log("eu gosto de" + tipo);
// };

// gostoDe("animes");

// type Pessoa = {
//   nome: string;
//   idade: number;
// };

// type Pessoa = {
//     nome: string;
//     idade: number;
//     endereco?: string | null;
// };

// const pessoa:Pessoa = {
//     idade: 20,
//     nome: "Muryllo",
// };

// type CriaPessoaProps = {
//     nome:string;
//     sobrenome: string;
//     idade: number;
// }

// function criarPessoa({nome, sobrenome, idade}: CriaPessoaProps) {
//   const pessoa = {
//     nomeCompleto: nome + " " + sobrenome,
//     idade,
//   };

//   console.log (pessoa);
// };

// criarPessoa({nome: "Muryllo", sobrenome:"Henrique", idade: 20});

// Adicione os tipos de forma correta

const animais: Array<string> = ["gato", "cão", "papagaio"];

const idades: Array<number> = [21, 30, 25, 18, 27];

// Adicione na pessoa uma lista de filmes preferidos, caso a pessoa tenha essa lista

// Adicione na pessoa as informações de endereço (logradouro, número, complemento, cidade, estado)

type CriaPessoaFunc = {
    nome:string;
    sobrenome: string;
    idade: number;
    corPreferida: string;
    tamanhoCamiseta: "G" | "P" | "M" | "GG";
    tomaCafe: boolean;
    filmes: Filmes;
    endereco: Endereco;
}

type Filmes = Array<string>;

type Endereco = {
    logradouro: string;
    numero: string | number;
    complemento?: string;
    cidade: string;
    estado: string;
}

function criarPessoa({nome, sobrenome, idade, corPreferida, tamanhoCamiseta, tomaCafe, filmes, endereco}: CriaPessoaFunc) {
  const pessoa = {
    nomeCompleto: nome + " " + sobrenome,
    idade,
    corPreferida,
    tamanhoCamiseta,
    tomaCafe,
    filmes,
    endereco
  };

  console.log (pessoa);
};

criarPessoa({nome: "Muryllo", sobrenome:"Henrique", idade: 20, corPreferida: "Preto", tamanhoCamiseta: "M", tomaCafe: true, filmes: ["Capitão Fantástico", "A ghost story"], endereco: {
    logradouro: "Jacarandá",
    numero: 105,
    cidade: "Catalão",
    estado: "Goiás"
}});