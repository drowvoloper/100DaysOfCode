const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

// Helpers
const helpers = require('./helpers');

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

// Pasar var dump a la aplicacion
app.use((req, res, next) => {
    // res.locals nos permite crear variables
    // que pueden ser utilizadas en el resto de
    // tu aplicación
    res.locals.vardump = helpers.vardump;
    next();
});

// habilitar body parser
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

app.listen(3000);

