const { Usuarios } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const bcrypt = require("bcryptjs");

const AuthController = {
  async login(req, res) {
    const { email, senha } = req.body;

    const usuario = await Usuarios.findOne({
      where: {
        email,
      },
    });

    if (!usuario) {
      return res.status(400).json("Email não cadastrado.");
    }

    if (!bcrypt.compareSync(senha, usuario.senha)) {
      return res.status(401).json("Senha inválida.");
    }

    // toda vez que nosso usuário logar gera um token pra ele
    const token = jwt.sign(
    {
      id: usuario.id,
      email: usuario.email,
      nome: usuario.nome,
    },
    secret.key
    );

    return res.json(token);
  },
};

module.exports = AuthController;
