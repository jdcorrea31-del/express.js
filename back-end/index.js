console.log("mi primera app enexpress.js");
require("dotenv").config();
const express = require('express');
const usuarios = require("./data/usuarios");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use((req, res, next) => {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
res.header("Access-Control-Allow-Headers", "Content-Type");
next();
});

app.get('/', (req, res) => {
    res.json({
        message: '¡Hola! Express funcionando',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});








app.get("/usuarios", (req, res) => {
    res.json({
        message: "usuarios",
        timestamp: new Date().toDateString(),
        usuarios: usuarios
    });

});

app.get("/usuarios/:id",(req, res)=>{
    const {id}= req.params;
    const usuario = usuarios.find((usuario) => usuario.id ===parseInt(id));

    if (!usuario) {
        return res.status(404).json({
            message: "usuarioo no encontrado",
            timestamp: new Date().toDateString(),
            status: "error",
        });
    }
    res.status(200).json({
        message: "usuarioo",
        timestamp: new Date().toDateString(),
        usuario: usuario
    });
});


app.post("/usuarios",(req, res)=>{
    const {name, phone, email, address, age, image} =req.body;
    const usuario= {id: (usuarios.length + 1).toString(), name, phone, email, address, age, image};
    console.log (usuario)
    usuarios.push(usuario);
    res.json({
        message: "usuarioo creado",
        timestamp: new Date().toISOString(),
        status: "success",
        usuario: usuario
    });
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});