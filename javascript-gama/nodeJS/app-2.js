const http = require("http");
const url = require("url");
const queryString = require("query-string");
const fs = require('fs');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    
    var resposta;
    const urlparse = url.parse(req.url, true);
    // Receber informacoes do usuario
    const params = queryString.parse(urlparse.search);

    // Criar um usuario - Atualizar um usuario
    if(urlparse.pathname == '/criar-atualizar-usuario'){
              
        // Salvar as informacoes
        fs.writeFile /*salva o arquivo*/ ('users/'+ params.id +'.txt'/*nome do arquivo*/, JSON.stringify(params)/*conteúdo do arquivo*/, function(err)/*função de call-back, chama depois que ele executa o que você pediu */ {
            if (err) throw err /*se tiver erro esse "throw" irá exibir*/;
            console.log('Saved!') /*se der certo irá salvar*/;

            resposta = "Usuario criado/atualizado com sucesso!";

            res.statusCode = 200;
            res.setHeader("Content-Type", "text/plain");
            res.end(resposta);
        });
    }
    
    // Selecionar usuario
    else if(urlparse.pathname == '/selecionar-usuario'){
        fs.readFile('users/'+ params.id +'.txt', function (err, data) {
        resposta = data;
        
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(resposta);
        });
    }           
    // Remover o usuario
    else if(urlparse.pathname == '/remover-usuario'){
        fs.unlink('users/'+ params.id +'.txt', function (err) {
        console.log('File deleted!');

        resposta = err ? "Usuario nao encontrado." : "Usuario removido.";

        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end(resposta);
        });
    }   
});
  
    // Execução
    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// localhost:3000/criar-atualizar-usuario?nome=muryllo&idade=19&id=1
// localhost:3000/criar-atualizar-usuario?nome=muryllo&idade=20&id=1
// localhost:3000/selecionar-usuario?id=1
// localhost:3000/remover-usuario?id=1