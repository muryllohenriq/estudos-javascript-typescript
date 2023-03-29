const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");
//JS DOM

inputCep.onkeyup = async (evento) => {
//Testar se o cep é válido
if (inputCep.value.length == 7){
return;
}
//Colocar popups que vão sugerir o valor correto e formato do cep

//Buscar informações do CEP === Requisição a API do BRASILAPI
const resposta = await fetch(`https://brasilapi.com.br/api/cep/v1/${inputCep.value}`, {

});
// extrair e imprimir
const conteudoResposta = await resposta.json();
//atribuir ao html as respostas
inputRua.value = conteudoResposta.street;
inputBairro.value = conteudoResposta.neighbourhood;
inputUF.value = conteudoResposta.state;
inputComplemento.value = conteudoResposta.city;

console.log(conteudoResposta);

};