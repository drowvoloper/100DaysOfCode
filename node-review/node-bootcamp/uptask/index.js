const express = require('express');
const routes = require('./routes');
const path = require('path');

// Inicializar la app de express
const app = express();

// Habilitar pug
app.set('view engine', 'pug');

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

app.use('/', routes());

app.listen(3000);

