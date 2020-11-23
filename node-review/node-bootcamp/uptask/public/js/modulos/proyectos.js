import Swal from 'sweetalert2';
import axios from 'axios';

const btnEliminar = document.querySelector('#eliminar-proyecto');

if (btnEliminar) {
    btnEliminar.addEventListener('click', (e) => {
        const urlProyecto = e.target.dataset.proyectoUrl;
        //console.log(urlProyecto);

        Swal.fire({
            title: '¿Deseas borrar este proyecto?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, ¡borrar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {

                const url = `${location.origin}/proyectos/${urlProyecto}`;

                axios.delete(url, { params: { urlProyecto } })
                    .then(function (respuesta) {
                        console.log(respuesta);

                        Swal.fire(
                            '¡eliminado!',
                            'El proyecto ha sido eliminado.',
                            'success'
                        );

                        setTimeout(() => {
                            window.location.href = '/';
                        }, 3000);
                    })
                    .catch(() => {
                        Swal.fire({
                            type: 'error',
                            title: 'Hubo un error',
                            text: 'No se pudo eliminar el proyecto'
                        })
                    })

            }
        })
    });
}

export default btnEliminar;
