console.log("Boletim");

function somaBoletim(x, y, z){
    let media =0;
    media = ((x+y+z)/3);
    if (media >= 7){
        console.log('Aprovado');
    }
    else if(media>=5 && media < 7) {
        console.log('Recuperação');
    } else {
        console.log('Reprovado');
    }
} somaBoletim(10,6,5)

function fatorial(fat) {
  let fator = 1;
  for (let index = fat; index >= 1; index -= 1) {
    fator *= index;
  }
  console.log(fator);
}
fatorial(3);

// exemplo mercadoria

let statusPedido = "disponivel";
let statusPagamento = "pago";
 
let situacaoEntrega = (statusPedido === "disponivel" && statusPagamento === "pago")
  ? "Entrega liberada" : "Entrega não liberada";
console.log(situacaoEntrega);

var frutas = ['Maçã', 'Banana', 'Laranja', 'Mixirica', 'Pêssego']
var ultimo = frutas.length
console.log(ultimo)
