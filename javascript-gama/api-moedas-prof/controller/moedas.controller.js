const moedasModel = require("../model/moedas");

const moedasController = {
  get: (request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.json(moedasModel.getListCoins());
  },

  welcome: (request, response) => {
    response.send("Seja bem vindo a api");
  },

  insert: (request, response) => {
    const { code, value } = request.body;
    response.setHeader("Access-Control-Allow-Origin", "*");
    const newCoin = moedasModel.insertCoin(code, value);

    response.status(201).json(newCoin);
  },
};

module.exports = moedasController;
