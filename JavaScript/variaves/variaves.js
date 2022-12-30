// - Escopo
// Local
// Global
// Escopo determina o acesso a visibilidade de uma variável, determina onde a variável vai estar disponível, o alcance dela. Variáveis definidades dentro de uma função, não são acessíveis nem visíveis fora dessa função
// - Scope Chain
// Quando você declara variáveis em um escopo, todos os escopos internos conseguem acessar essas valores, independente da profundidade interna. O escopo interno procura a variável no seu escopo local, caso não encontre, ele vai procurando até atingir o escopo global
// - Hoisting  
// elevar as coisas
// Diferença entre var, let e const:
// Deve se prestar atenção em 3 coisas quando for declarar uma variável em JavaScript: 1 - Escopo, 2 - Redeclaração e 3 - Hoisting.
// var: O que delimita o escopo de uma variável tipo var, é uma função. A variável não extrapola o limite imposto por uma função
// Uma variável do tipo var aceita ser redeclarada normalmente
// O interpretador do JavaScript, antes de executar o código ele move todas variáveis do tipo var e também todas as declarações de funções pro topo do escopo, é mantida a atribuição do valor dentro da variável la em baixo, o interpretador não mexe nisso, mas ele eleva a declaração pro topo. Por isso, sempre delcare variáveis no topo do código.
// let: Possui block scope, o alcança da variável let, esbarra no limite de qualquer tipo de bloco no JavaScript. Você não pode redeclará-la, mas você pode alterar o valor dela sem problema algum. let também sofre hoisting, porém não é inicializada com valor undefined, logo você precisa declarar na ordem correta se não vai receber um erro
// const: também tem escopo de bloco, também sofre hoisting mas não é inicializado, não pode ser redeclarado e o valor não pode ser reatribuído, mas é possível declarar um objeto em uma const e depois modificar uma das propriedades desse objeto
// - Function Declaration
// myFunc();
// function myFunc() {console.log('oi');}
// Dessa forma ela vai estar disponível independente da ordem do seu script, graças ao hoisting. Então o código acima funcionaria
// - Function Expression
// myFunc();
// var myFunc = function() {console.log('oi');}
// Como em uma declaração de variável apenas a variável sofre hoisting e não seu valor, desse modo apenas a variável estaria disponível e o código acima não funcionaria