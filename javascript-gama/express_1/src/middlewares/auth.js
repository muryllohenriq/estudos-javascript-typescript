const expressJWT = require("express-jwt");
const secret = require("../configs/secret")

// valida se existe esse token
module.exports = expressJWT({
    secret: secret.key,
    //tipo de algoritmo de criptografia que estamos usando 
    algorithms: ["HS256"],
});