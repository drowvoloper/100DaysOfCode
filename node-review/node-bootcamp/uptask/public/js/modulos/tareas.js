import axios from "axios";
import Swal from "sweetalert2";

const tareas = document.querySelector('.listado-pendientes');

if (tareas) {
    tareas.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-check-circle')) {
            const icono = e.target;
            const idTarea = icono.parentElement.parentElement.dataset.tarea;

            // request hacia /tareas/:id
            const url = `${location.origin}/tareas/${idTarea}`;

            axios.patch(url, { idTarea })
                .then(function(respuesta) {
                    if (respuesta.status === 200) {
                        icono.classList.toggle('completo');
                    }
                })
        }

        if (e.target.classList.contains('fa-trash')) {
            const tareaHTML = e.target.parentElement.parentElement;
            const idTarea = tareaHTML.dataset.tarea;

            Swal.fire({
                title: '¿Deseas borrar esta tarea?',
                text: "Esta acción no se puede deshacer",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, ¡borrar!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.value) {
                    const url = `${location.origin}/tareas/${idTarea}`;

                    // enviar delete por medio de axios
                    axios.delete(url, { params: { idTarea }})
                        .then(function(respuesta) {
                            if(respuesta.status === 200) {
                                // Eliminar el Nodo
                                tareaHTML.parentElement.removeChild(tareaHTML);

                                // Alerta
                                Swal.fire('Tarea eliminada',
                                    respuesta.data,
                                    'success');
                            }
                        });
                }
            })
            
        }
    });
}

export default tareas;