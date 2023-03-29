// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);

// Interfaces
interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Muryllo',
        email: 'muryllo@ryllo.com'
    }
}

// Metodos e variáveis privadas. Que só podem ser acessados de dentro da própria classe.

class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { }

    private alterarVelocidade(delta:number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }

    acelerar() {
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar();

// Herança
class Camaro extends Carro {
    private turbo = false;

    constructor() {
        super('Chevrolet', 'Camaro', 500);
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();