// Primeiro esse código importa o módulo http
const http = require("http");
// Importação pacote npm
const url = require("url");
const queryString = require("query-string");

// É definido para o servidor, escutar em uma porta port e host name host específicos.
const hostname = "127.0.0.1";
const port = 3000;

// O método createServer() do http cria um novo servidor HTTP e o retorna.
// Sempre que uma nova requisição é recebida, o evento de request é chamado, provendo dois objetos: uma requisição (objeto do tipo http.IncomingMessage ) e uma resposta (objeto do tipo http.ServerResponse ). Esses 2 objetos são essenciais para manusear a chamada HTTP. O primeiro provê os detalhes da requisição. Nesse simples exemplo, ele não é utilizado, mas com ele você pode acessar os dados da request e as headers . O segundo é usado para retornar dados para quem o chamou. Nesse caso: "res.statusCode = 200".
const server = http.createServer((req, res) => {
  // Pegar a pergunta na url
  const params = queryString.parse(url.parse(req.url, true).search);
  // Verificar a pergunta e escolher uma resposta
  let resposta;
  if(params.pergunta == 'melhor-filme'){
    resposta = 'star wars';
  }
  else if(params.pergunta == 'melhor-tecnologia-backend'){
    resposta = 'nodejs';
  }
  else {
    resposta = 'nao sei, desculpe :(';
  }
  // Retornar a resposta escolhida

  // Informa ao navegador que deu certo
  res.statusCode = 200;
  // Definimos a propriedade statusCode como 200, para indicar uma resposta bem sucedida. Definimos a header de Content-Type (tipo de conteúdo):
  res.setHeader("Content-Type", "text/plain");
  // E fechamos a resposta, adicionando o conteúdo como um argumento do end() :
  res.end(resposta);
});

// Quando o servidor está pronto, a função callback é chamada, nesse caso nos informando que o servidor está rodando.
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
