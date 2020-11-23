const Proyectos = require('../models/Proyectos');

exports.proyectosHome = async (req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    });
}

exports.formularioProyecto = async (req, res) => {
    const proyectos = await Proyectos.findAll();
    res.render('nuevo-proyecto', {
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    })
}

exports.nuevoProyecto = async (req, res) => {
    const proyectos = await Proyectos.findAll();
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
            errores,
            proyectos
        })
    } else {
        // insertar en bbdd
        await Proyectos.create({nombre});
        res.redirect('/');
    }
}

exports.proyectoPorUrl = async (req, res, next) => {
    const proyectos = await Proyectos.findAll();
    const proyecto = await Proyectos.findOne({
        where: {
            url: req.params.url
        }
    });

    if (!proyecto) return next();

    res.render('tareas', {
        nombrePagina: 'Tareas del Proyecto',
        proyecto,
        proyectos
    })
}

exports.formularioEditar = async (req, res) => {
    const proyectosPromise = Proyectos.findAll();

    const proyectoPromise = Proyectos.findOne({
        where: {
            id: req.params.id
        }
    });

    const [proyectos, proyecto] = await Promise.all([ proyectosPromise, proyectoPromise]);

    res.render('nuevo-proyecto', {
        nombrePagina: 'Editar Proyecto',
        proyectos,
        proyecto
    });
}

exports.actualizarProyecto = async (req, res) => {
    const proyectos = await Proyectos.findAll();
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
            errores,
            proyectos
        })
    } else {
        // insertar en bbdd
        await Proyectos.update(
            {nombre},
            {where: {id: req.params.id}}
        );
        res.redirect('/');
    }
}

exports.eliminarProyecto = async (req, res, next) => {
    // req, query o params para ver la info que se está mandando al servidor
    const { urlProyecto } = req.query;

    const resultado = await Proyectos.destroy({
        where: {
            url: urlProyecto
        }
    });

    if (!resultado) {
        return next();
    }

    res.send('Proyecto eliminado correctamente');
}