"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseSingleton_1 = require("./DatabaseSingleton");
let db;
db = DatabaseSingleton_1.DatabaseSingleton.getInstance(); // aqui seria o lugar do famoso "NEW"
db.executarQuery("SELECT * FROM tblClient");
let db2;
db2 = DatabaseSingleton_1.DatabaseSingleton.getInstance();
db2.executarQuery("SELECT * FROM tblProduto");
