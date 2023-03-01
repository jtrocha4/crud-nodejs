const express = require("express");
const app = express();

//Motor de diseño ejs
app.set("view engine", "ejs");

//Capturar datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// app.get("/", (req,res)=>{
//     res.send("Bienvenidos")
// })

app.listen(5000, () => {
    console.log("Server corriendo en http://localhost:5000/");
});


//Rutas
app.use("/", require("./routers"));



