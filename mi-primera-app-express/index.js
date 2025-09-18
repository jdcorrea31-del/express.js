console.log("mi primera app enexpress.js");
require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        message: '¡Hola! Express funcionando',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});

const products=[
    {
        id: 1,
        name: "producto 1",
        price: 100
    },
    {
        id: 2,
        name: "producto 2",
        price: 200

    },
        {
        id: 3,
        name: "producto 3",
        price: 300

    },

]

app.get("/products", (req,res)=>{
    res.json({
        message: "productos",
        timestamp: new Date().toDateString(),
        products: products

    });
});