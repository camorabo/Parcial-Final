document.addEventListener("DOMContentLoaded", function (event) {
    var divServicios = document.getElementById("servicios");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayServicios") == null) {
        array = [];
        localStorage.setItem("arrayServicios", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayServicios"));
    }

    // Poblando el div que muestra los Servicios
    var listadoServicios = JSON.parse(localStorage.getItem("arrayServicios"));
    var divServicios = document.getElementById("servicios");
    listadoServicios.forEach(element => {
        divServicios.innerHTML = divServicios.innerHTML + '<div class="card"><div class="card-body"><table class="table table-hover"><tbody><tr class="table-dark"><td>Servicio</td><td>' + element["servicio"] + '</td></tr><tr class="table-active"><td>Costo</td><td>' + element["costo"] + '</td></tr><tr class="table-light"><td>Cantidad</td><td>' + element["cantidad"] + '</td></tr><tr class="table-dark"><td>Correo</td><td>' + element["correo"] + '</td></tr></tbody></table></div></div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de Servicios
function registrarServicio() {
    var servicio = document.getElementById("servicio");
    var costo = document.getElementById("costo");
    var cantidad = document.getElementById("cantidad");
    var correo = document.getElementById("correo");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayServicios") == null) {
        array = [];
        localStorage.setItem("arrayServicios", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayServicios"));
    }

    // Agregando un nuevo servicio al array
    array.push({ "servicio": servicio.value, "costo": costo.value, "cantidad": cantidad.value, "correo": correo.value });

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayServicios", JSON.stringify(array));

    // Recuperando el array de Servicios del localStorage
    // para volverlo a mostrar
    var listadoServicios = JSON.parse(localStorage.getItem("array"));

    // Obteniendo el div donde se muestran los Servicios
    var divServicios = document.getElementById("servicios");

    // Recorriendo el array de Servicios que viene del localStorage
    listadoServicios.forEach(element => {
        // Se añade cada servicio al div como un card
        divServicios.innerHTML = divServicios.innerHTML + '<div class="card"><div class="card-body"><table class="table table-hover"><tbody><tr class="table-dark"><td>Servicio</td><td>' + element["servicio"] + '</td></tr><tr class="table-active"><td>Costo</td><td>' + element["costo"] + '</td></tr><tr class="table-light"><td>Cantidad</td><td>' + element["cantidad"] + '</td></tr><tr class="table-dark"><td>Correo</td><td>' + element["correo"] + '</td></tr></tbody></table></div></div>';
    });
    return false;
}