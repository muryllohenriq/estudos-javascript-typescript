var nomeCompleto = 'Muryllo Henrique'
console.log(nomeCompleto)

var numeroA = 2
var numeroB = 3
resultado = numeroA + numeroB
console.log(resultado)

function saudacao() {
    return "Oi eu sou o Goku!"
}
console.log(saudacao())

function multiplica(a,b) {
    return a * b
}
console.log(multiplica(2,3))

function podeDirigir(entrada){
    if (entrada >= 18)
    return 'Você pode dirigir'
    else {
        return 'Você não pode dirigir'
    }
}
console.log(podeDirigir(18))

for (var b = 0; b <= 20; b++) {
    console.log(b)
}

for (var a = 1; a <= 19; a += 2) {
    console.log(a)
}

let n = 9
for(let c = 1; c <= 10; c++) {
    console.log(c * n)
}

function tabuada (number){
    let a = 1;
    while(a<=10){
        console.log(number + "X" + a + "=" + (a*number)); a++
    }
} tabuada(5);

function converterEmHoras(a) {
    return a / 60
} console.log(converterEmHoras(180))


