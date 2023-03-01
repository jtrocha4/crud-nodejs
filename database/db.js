const mysql = require("mysql");
const env = require("dotenv");
env.config()

const conexion = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});

conexion.connect((error) => {
    if (error) {
        console.log(error);
        return;
    } else {
        console.log("Conexion exitosa");
    }
});

module.exports = conexion;