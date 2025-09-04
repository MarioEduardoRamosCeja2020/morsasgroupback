const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;
var bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'morsasgroup'
});


db.connect(err => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});


app.get('/api/item', (req, res) => {
    db.query('SELECT * FROM item', (err, results) => {
        if (err) {
            console.error('Error al obtener las refacciones:', err);
            res.status(500).json({ error: 'Error en el servidor' });
            return;
        }
        res.json(results);
    });
});


app.post('/api/itemBySystem', (req, res) => {
    console.log("si entra");
    // const system = req.query.system;
    console.log("voy" + req);
    if (!system) {
        return res.status(400).json({ error: 'El parámetro "system" es necesario.' });
    }

    // console.log("Buscando productos para el sistema:", system.toString());


    // db.query("SELECT * FROM item WHERE system = '+system+'", (err, results) => {
    //     if (err) {
    //         console.error('Error al obtener las refacciones:', err);
    //         res.status(500).json({ error: 'Error en el servidor' });
    //         return;
    //     }
    //     res.json(results);
    // });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});