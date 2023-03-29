const listCoins = require("../database/moedas.json");
const fs = require("fs");
const path = require("path");

function getListCoins() {
  return listCoins;
}

function insertCoin(code, value) {
  const newCoin = {
    code: code,
    codein: "BRL",
    name: "Libra Esterlina/Real Brasileiro",
    high: value,
    low: "7.648",
    varBid: "0.0021",
    pctChange: "0.03",
    bid: "7.6567",
    ask: "7.6591",
    timestamp: "1641815670",
    create_date: "2022-01-10 08:54:30",
  };

  listCoins.push(newCoin);

  fs.writeFileSync(
    path.resolve("database", "moedas.json"),
    JSON.stringify(listCoins)
  );

  return newCoin;
}

module.exports = { getListCoins, insertCoin };
