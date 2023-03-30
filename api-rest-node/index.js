const { conexion } = require("./basedatos/conexion");
const express = require("express");
const cors = require("cors");

//inicializar app
console.log("App de node arrancada");

//conectar a la base de datos
conexion();

//Crear servidor Node
const app = express();

//configurar cors
app.use(cors());

//Convertir body a objeto js
app.use(express.json())

//crear rutas


//crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor correindo en el puerto "+puerto)
});
