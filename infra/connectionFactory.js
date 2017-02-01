var mysql = require("mysql");

function createConnection(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: (process.env.NODE_ENV == "teste") ? "casadocodigo_teste" : "casadocodigo"
  });
}

module.exports = createConnection;
