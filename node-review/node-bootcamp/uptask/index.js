const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Crear la conexión a la BBDD
const db = require('./config/db');

// Importar el modelo
require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado!'))
    .catch(error => console.log(error));

// Inicializar la app de express
const app = express();

// Dónde cargar los archivos estáticos
app.use(express.static('public'));

// Habilitar pug
app.set('view engine', 'pug');

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// habilitar body parser
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen(3000);

