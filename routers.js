const app = require("express");
const router = app.Router();

const conexion = require("./database/db");

router.get("/", (req, res) => {
    // res.render("index");
    conexion.query("SELECT * FROM paises", (error, results) => {
        if (error) {
            console.log(error);
        } else {
            res.render("index", { paises: results });
        }
    });
});

module.exports = router;