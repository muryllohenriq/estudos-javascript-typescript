const cursosModel = require("../model/cursos");

const cursosController = {
    get: (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.json(cursosModel.getListCursos());
    },

    insert: (req, res) => {
        const { code, value } = req.body;
        res.setHeader("Access-Control-Allow-Origin", "*");
        const newCurso = cursosModel.insertCurso(code, value);

        res.status(201).json(newCurso);
    },
};

module.exports = cursosController;