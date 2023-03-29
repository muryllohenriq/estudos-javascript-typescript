const { Usuarios } = require("../models");
// Importando bcrypt para senhas criptografadas
const bcrypt = require("bcryptjs");

const UsuariosController = {
  async registro(req, res) {
    const { nome, email, senha } = req.body;

    try {
      // pra criptografar a senha  
      const newSenha = bcrypt.hashSync(senha, 10);

      const userSaved = await Usuarios.count({
        where: {
            email,
        },
      });

      if(userSaved){
        return res.status(400).json("Email já cadastrado.");
      }

      const newUsuario = await Usuarios.create({
        nome,
        email,
        senha: newSenha,
      });

      return res.status(201).json(newUsuario);
    } catch (error) {
        console.log(error);
    }
  },

  login: async (req, res) => {
    const { email, senha } = req.body;

    const userSaved = await Usuarios.findOne({
        where: {
            email,
        },
    });

    if (!userSaved) {
        return res.status(400).json("Usuario não cadastrado");
    }

    if (!bcrypt.compareSync(senha, userSaved.senha)) {
        return res.status(400).json("Senha incorreta");
    }

    return status(200).json("Login com sucesso!");
  },
};

module.exports = UsuariosController;
