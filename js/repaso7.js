function guardarDatos() {
    validarDatos();
}

function validarDatos() {
    let nombre = document.getElementById("id_nombre").value.trim();
    let apellido = document.getElementById("id_apellido").value.trim();
    let cedula = document.getElementById("id_cedula").value.trim();

    if (nombre === "") {
        mostrarMensaje("Nombre vacio!");
        return;
    }

    if (apellido === "") {
        mostrarMensaje("Apellido vacio!");
        return;
    }

    if (cedula === "") {
        mostrarMensaje("Cédula vacia!");
        return;
    }

    if (/\D/.test(cedula)) {
        mostrarMensaje("Solo digitos!");
        return;
    }

    mostrarMensajeExito("Formulario completo!")

    generarJSON(nombre, apellido, cedula);

    limpiarImputs();

}

function generarJSON(nombre, apellido, cedula) {

    const obj = {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula
    };

    const jsonString = JSON.stringify(obj);

    document.getElementById("id_json").value = jsonString;


}

function cargarJSON() {

    const json = document.getElementById("id_json").value.trim();

    if (json === "") {
        mostrarMensaje("JSON vacio");
        return;
    }

    try {
        const obj = JSON.parse(json);

        document.getElementById("id_nombre").value = obj.nombre || "";
        document.getElementById("id_apellido").value = obj.apellido || "";
        document.getElementById("id_cedula").value = obj.cedula || "";

    } catch (e) {
        mostrarMensaje("Error en JSON")
    }

    mostrarMensajeExito("Datos cargados desde JSON")

}

function limpiarImputs() {

    document.getElementById("id_nombre").value = "";
    document.getElementById("id_apellido").value = "";
    document.getElementById("id_cedula").value = "";

}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.backgroundColor = "red";
    mensaje.style.visibility = "visible";

    setTimeout(() => {
        mensaje.innerText = "";
        mensaje.style.visibility = "hidden";
    }, 5000);
}


function mostrarMensajeExito(msg) {
    let mensaje = document.getElementById("id_msg_exito");
    mensaje.innerText = msg;
    mensaje.style.backgroundColor = "greenyellow";
    mensaje.style.visibility = "visible";

    setTimeout(() => {
        mensaje.innerText = "";
        mensaje.style.visibility = "hidden";
    }, 5000);
}
