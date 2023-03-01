const conexion = require("../database/db");

//Crear registro
exports.save = (req,res)=>{
    const nombre = req.body.nombre;
    const continente = req.body.continente;

    console.log(""+nombre+" -"+continente);

    conexion.query("INSERT INTO paises SET ?",{nombre:nombre,continente:continente}, (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect("/");
        }
    });

};