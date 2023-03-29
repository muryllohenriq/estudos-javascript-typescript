const { Gender, MovieCast, person } = require("../models");

const GenderController = {
  listAll: async (req, res) => {
    // mesma coisa que "select * from gender"
    const genders = await Gender.findAll();

    return res.json(genders);
  },

  createGender: async (req, res) => {
    const { gender } = req.body;

    const newGender = await Gender.create({
      gender,
    });

    return res.status(201).json(newGender);
  },

  getOne: async (req, res) => {
    const { id } = req.params;

    const genderSaved = await Gender.findByPk(id);

    return res.json(genderSaved);
  },

  showMovieCastsByGender: async (req, res) => {
    try {
      const result = await Gender.findAll({
        include: [
          {
            model: MovieCast,
            required: true,
          },
          {
            model: MovieCast,
            required: true,
          },
        ],
      });
      return res.json(result);
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

module.exports = GenderController;
