const listCursos = require("../database/cursos.json");
const fs = require("fs");
const path = require("path");

function getListCursos() {
    return listCursos;
}

function insertCurso(code, value) {
    const newCurso = {
    id: "2",
    titulo: "curso 2",
    descricao: "teste 2",
    professor: "vinny 2"
    };
    
    listCursos.push(newCurso);

    fs.writeFileSync(
        path.resolve("database", "cursos.json"),
        JSON.stringify(listCursos)
    );

    return newCurso;
}

module.exports = { getListCursos, insertCurso}