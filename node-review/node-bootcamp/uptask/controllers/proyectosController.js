exports.proyectosHome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    });
}

exports.formularioProyecto = (req, res) => {
    res.render('nuevo-proyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}

exports.nuevoProyecto = (req, res) => {
    const { nombre } = req.body;

    let errores = [];

    if (!nombre) {
        errores.push(
            {
                'texto': 'Agrega un nombre al proyecto'
            }
        )
    }

    if (errores.length > 0) {
        res.render('nuevo-proyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    } else {
        // insertar en bbdd
    }
}