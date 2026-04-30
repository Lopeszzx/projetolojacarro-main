const express = require('express');
const mysql2 = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "loja_carro"
});

db.connect (err => {
    if(err) {
        console.log("erro ao conectar:", err)
    } else{
        console.log("conectado ao Mysql")
    }
});

app.post("/carros", (req, res) => {
    const carro = req.body;
}) ;

const sql = `INSERT INTO carros (titulo,preco,descricao,marca,modelo,kilometragem,data_conpra,cambio) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

const valores = [
    carro.titulo,
    carro.preco,
    carro.descrocao,
    carro.marca,
    carro.modelo,
    carro.kilometragem,
    carro.data_compra,
    carro.canbio
];

db.query(sql, valores, (err, result) => {
    if(err) {
        return res.status(500).json(err);
    }
    res.json({mensagem: "carro salvo com susesso!"});
});

app.get("/carros", (req, res) =>{
    db.query("SELECT * FORM carros", (err, result) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.json(result);
    });
});