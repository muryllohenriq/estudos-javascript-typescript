// arquivo index não é preciso especificar
const db = require("../database");
// importa os tipos do sequelize
const { DataTypes } = require("sequelize");
const Fabricantes = require("./Fabricantes");

const Produtos = db.define(
  // nome do model
    "Produtos", 
  // descrição das colunas da tabela  
  {
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
   },
   nome: {
    type: DataTypes.STRING,
   },
   preco: {
    type: DataTypes.FLOAT,
   },
   quantidade: {
    type: DataTypes.INTEGER,
   },
   fabricante_id: {
    type: DataTypes.INTEGER,
    references:{
      model: Fabricantes,
      key: 'id',
    },
   },
   createdAt: {
    type: DataTypes.DATE,
   },
   updatedAt: {
    type: DataTypes.DATE,
   },
},
// configs da tabela
{
  tableName: 'produtos',  
});

module.exports = Produtos;