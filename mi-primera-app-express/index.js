console.log("mi primera app enexpress.js");
require("dotenv").config();
const express = require('express');
const products = require("./data/products");
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






app.get("/products", (req, res) => {
    res.json({
        message: "productos",
        timestamp: new Date().toDateString(),
        products: products
    });
});

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
});