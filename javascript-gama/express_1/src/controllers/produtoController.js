const { Produtos, Fabricantes, Categorias } = require("../models");

const produtoController = {
  listarProduto: async (req, res) => {
    const listaDeProdutos = await Produtos.findAll({
      include: Categorias,
    });

    res.json(listaDeProdutos);
  },

  async cadastrarProduto(req, res) {
    // função assíncrona, pra lidar com banco de dados todas as funções são assíncronas
    const { nome, preco, quantidade, fabricante_id, categoria_id } = req.body;

    const novoProduto = await Produtos.create({
      // pega as informações da request, e passa pro método create e ele vai fazer o insert dentro do banco de dados, na tabela "Produtos"
      nome,
      preco,
      quantidade,
      fabricante_id,
    });

    // pra pegar uma dado da tabela intermediária sem ter que especificá-la
    const categoria = await Categorias.findByPk(categoria_id);

    await novoProduto.setCategorias(categoria);

    res.status(201).json(novoProduto);
  },

  async deletarProduto(req, res) {
    try {
    const { id } = req.params;

    await Produtos.destroy({
      where: {
        id,
      },
    });

    res.status(204);
  } catch (error) {
    return  res.status(500).json("Ocorreu algum problema.");
  }
  },

  async atualizarProduto(req, res) {
    const { id } = req.params;
    const { nome, preco, quantidade } = req.body;

    if (!id) return res.status(400).json("id não enviado.");

    const produtoAtualizado = await Produtos.update(
      {
        nome,
        preco,
        quantidade,
      },
      {
        where: {
          id,
        },
      }
    );

    res.json("Produto Atualizado!")
  },
};

module.exports = produtoController;
