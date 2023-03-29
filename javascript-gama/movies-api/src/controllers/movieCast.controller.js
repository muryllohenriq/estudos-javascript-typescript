const { person, MovieCast } = require("../models");
const movieCastController = {
  listAll: async (req, res) => {
    try {
      const movieCast = await MovieCast.findAll({
        include: person,
        limit: 50,
      });

      return res.json(movieCast);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json(
          "Erro na sua consulta, tente novamente mais tarde ou contate o suporte."
        );
    }
  },
};

module.exports = movieCastController;
