interface AcaoRespirar {
  respirar(): string;
}

class Peixe {
  tipo: string = "Peixe";
}

class Ave implements AcaoRespirar {
  tipo: string = "Ave";

  respirar(): string {
    return "respirou";
  }
}

class Mamifero implements AcaoRespirar {
  tipo: string = "Mamifero";

  respirar(): string {
    return "respirou";
  }
}

class Cao extends Mamifero {
  familia: string = "Canidea";
}

class Gato extends Mamifero {
  familia: string = "Felinea";
}

const costelinha = new Cao();
const mingau = new Gato();

console.log(costelinha.respirar());
console.log(mingau);
