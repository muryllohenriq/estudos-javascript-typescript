/* estrutura de repetição com teste lógico no início
var c = 1
while (c <= 6) {
    console.log(`Passo ${c}`)
    c++ 
}
*/

/* estrutura de repetição com teste lógico no final
var c = 1
do {
    console.log(`Passo ${c}`)
    c++
} while (c <= 6)

var c = 2
do {
    console.log(`Passo ${c}`)
    c = c + 4
} while (c <= 20)
*/

//  for 

let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)

for(let i = 0; i < valores.length; i++) {
    console.log(`A posição ${i} tem o valor ${valores[i]}`)
}

for(let indice in valores) {
    console.log(`A posição ${indice} tem o valor ${valores[indice]}`)  
}

for (let elemento of valores) {
    console.log(elemento);
}

// "of" percorre os elementos do array, "in" percorre os índices