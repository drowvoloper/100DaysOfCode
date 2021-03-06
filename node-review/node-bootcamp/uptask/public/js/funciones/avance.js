import Swal from "sweetalert2";

export const actualizarAvance = () => {
    // seleccionar las tareas existentes
    const tareas = document.querySelectorAll('li.tarea');

    if (tareas.length > 0) {
        // seleccionar las tareas completadas
        const completadas = document.querySelectorAll('.completo');

        // calcular el avance
        const avance = Math.round((100 / tareas.length) * completadas.length);

        // mostrar el avance
        const porcentaje = document.querySelector('.porcentaje');
        porcentaje.style.width = avance + "%";

        if (avance === 100) {
            Swal.fire(
                'Completaste el Proyecto',
                'Felicidades, has terminado tus tareas',
                'success'
            )
        }
    }
}
