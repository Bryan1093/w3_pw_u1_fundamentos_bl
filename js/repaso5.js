function guardarDatos() {
    validarDatos();
}

function validarDatos() {
    let telefono = document.getElementById("id_tel").value.trim();
    let nombre = document.getElementById("id_nombre").value.trim();
    let ciudad = document.getElementById("id_ciudad").value.trim();
    let email = document.getElementById("id_email").value.trim();
    let check = document.getElementById("id_check").checked;

    if (telefono === "") {
        mostrarMensaje("Campo telefono vacio");
        return;
    }

    if(nombre==="") {
        mostrarMensaje("Nombre vacio!");
        return;
    }

    if (ciudad === "") {
        mostrarMensaje("Campo ciudad vacio!")
        return;
    }

    if (email === "") {
        mostrarMensaje("Campo email vacio!");
        return;
    }

    
    if (!check) {
        mostrarMensaje("Debe aceptar los términos!");
        return;
    }

    mostrarMensajeExito("Subscripción realizada con éxito!")
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";

    setTimeout(()=> {
        mensaje.innerText = "";
        mensaje.style.display = "none";
    }, 5000)
}

function mostrarMensajeExito(msg) {
    let mensaje = document.getElementById("id_msg_exito");
    mensaje.innerText = msg;
    mensaje.style.display = "block";

    setTimeout(()=> {
        mensaje.innerText = "";
        mensaje.style.display = "none";
    }, 5000)
}