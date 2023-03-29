const { validate, Joi } = require("express-validation");

// Biblioteca joi utilizada para validar dados
module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).required()
    }),
});