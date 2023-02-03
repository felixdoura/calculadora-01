const express = require ("express");
const app = express();
const path = require("path");

// Middlewares
app.use(express.static("public"));
app.use(express.json());

// Routes
app.get ('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/index.html")) 
});

const port = process.env.PORT || 3001;
app.listen(port,()=>console.log("Servidor corriendo en el puerto "+port));