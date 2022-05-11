document.addEventListener("DOMContentLoaded", function (event) {
    var divOpiniones = document.getElementById("opiniones");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayOpiniones") == null) {
        array = [];
        localStorage.setItem("arrayOpiniones", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayOpiniones"));
    }

    // Poblando el div que muestra los opiniones
    var listadoOpiniones = JSON.parse(localStorage.getItem("arrayOpiniones"));
    var divOpiniones = document.getElementById("opiniones");
    listadoOpiniones.forEach(element => {
        divOpiniones.innerHTML = divOpiniones.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' dice: </h5><p>' + element["opinion"] + '</p></div></div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de Opiniones
function registrarOpinion() {
    var texto = document.getElementById("texto_opinion");
    var nombre = document.getElementById("nombre");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayOpiniones") == null) {
        array = [];
        localStorage.setItem("arrayOpiniones", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayOpiniones"));
    }

    // Agregando un nuevo opinion al array
    array.push({ "opinion": texto.value, "nombre": nombre.value });

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayOpiniones", JSON.stringify(array));

    // Recuperando el array de opiniones del localStorage
    // para volverlo a mostrar
    var listadoOpiniones = JSON.parse(localStorage.getItem("array"));

    // Obteniendo el div donde se muestran los opiniones
    var divOpiniones = document.getElementById("opiniones");

    // Recorriendo el array de opiniones que viene del localStorage
    listadoOpiniones.forEach(element => {
        // Se añade cada opinion al div como un card
        divOpiniones.innerHTML = divOpiniones.innerHTML + '<div class="card"><div class="card-body"><h5 class="card-title">' + element["nombre"] + ' dice: </h5><p>' + element["opinion"] + '</p></div></div>';
    });
    return false;
}