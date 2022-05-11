document.addEventListener("DOMContentLoaded", function (event) {
    var divEmpleos = document.getElementById("empleos");

    // Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayEmpleos") == null) {
        array = [];
        localStorage.setItem("arrayEmpleos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayEmpleos"));
    }

    // Poblando el div que muestra los empleos
    var listadoEmpleos = JSON.parse(localStorage.getItem("arrayEmpleos"));
    var divEmpleos = document.getElementById("empleos");
    listadoEmpleos.forEach(element => {
        divEmpleos.innerHTML = divEmpleos.innerHTML + '<div class="card"><div class="card-body"><table class="table table-hover"><tbody><tr class="table-dark"><td>Cargo:</td><td>' + element["empleo"] + '</td></tr><tr class="table-active"><td>Salario</td><td>' + element["salario"] + '</td></tr><tr class="table-light"><td>Cantidad</td><td>' + element["cantidad"] + '</td></tr><tr class="table-dark"><td>Profesional Requerido</td><td>' + element["profesional"] + '</td></tr></tbody></table></div></div>';
    });
    return false;
});

// Esta función se llama cuando se hace clic en el botón de Registrar
// de la página de empleos
function registrarEmpleo() {
    var empleo = document.getElementById("empleo");
    var salario = document.getElementById("salario");
    var cantidad = document.getElementById("cantidad");
    var profesional = document.getElementById("profesional");

    //Creando/Consultado el array con datos 
    // a partir de lo que exista en localStorage
    var array = [];
    if (localStorage.getItem("arrayEmpleos") == null) {
        array = [];
        localStorage.setItem("arrayEmpleos", JSON.stringify(array));
    } else {
        array = JSON.parse(localStorage.getItem("arrayEmpleos"));
    }

    // Agregando un nuevo empleo al array
    array.push({ "empleo": empleo.value, "salario": salario.value, "cantidad": cantidad.value, "profesional": profesional.value });

    // Guardando en el localStorage el nuevo array
    localStorage.setItem("arrayEmpleos", JSON.stringify(array));

    // Recuperando el array de empleos del localStorage
    // para volverlo a mostrar
    var listadoEmpleos = JSON.parse(localStorage.getItem("array"));

    // Obteniendo el div donde se muestran los empleos
    var divEmpleos = document.getElementById("empleos");

    // Recorriendo el array de empleos que viene del localStorage
    listadoEmpleos.forEach(element => {
        // Se añade cada empleo al div como un card
        divEmpleos.innerHTML = divEmpleos.innerHTML + '<div class="card"><div class="card-body"><table class="table table-hover"><tbody><tr class="table-dark"><td>Cargo:</td><td>' + element["empleo"] + '</td></tr><tr class="table-active"><td>Salario</td><td>' + element["salario"] + '</td></tr><tr class="table-light"><td>Cantidad</td><td>' + element["cantidad"] + '</td></tr><tr class="table-dark"><td>Profesional Requerido</td><td>' + element["profesional"] + '</td></tr></tbody></table></div></div>';
    });
    return false;
}