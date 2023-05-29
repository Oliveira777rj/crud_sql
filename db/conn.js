const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection({

  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE
});

db.connect((err) => {
  try {
    console.log('Conexao com banco de dados estabelecido com sucesso!')  
  } catch (err) {
    throw err
  }
})

module.exports = db;