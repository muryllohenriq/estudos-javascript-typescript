import { DatabaseSingleton } from "./DatabaseSingleton";

let db: DatabaseSingleton;

db = DatabaseSingleton.getInstance(); // aqui seria o lugar do famoso "NEW"
db.executarQuery("SELECT * FROM tblClient");

let db2: DatabaseSingleton;
db2 = DatabaseSingleton.getInstance();
db2.executarQuery("SELECT * FROM tblProduto");