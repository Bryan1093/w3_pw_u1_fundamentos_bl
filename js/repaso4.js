function guardarDatos() {
    validarDatos();
    validarEmail();
}

function validarDatos() {
    let nombre = document.getElementById("id_nombre").value.trim();
    let email = document.getElementById("id_email").value.trim();
    let contra = document.getElementById("id_pass").value.trim();
    let conf = document.getElementById("id_pass_conf").value.trim();
    let edad = document.getElementById("id_edad").value.trim();

    //nombre
    if (nombre === "") {
        mostrarMensaje("Ciego de mrda, falta el nombre");
        return;
    }

    if (/\d/.test(nombre)) {
        mostrarMensaje("No digitos en el nombre pues mrda");
        return;
    }

    //EMAIL
    if(email === "") {
        mostrarMensaje("Email vacio!");
        return;
    }

    //contraseña
    if (contra === "") {
        mostrarMensaje("Ciego de mrda, falta la contraseña");
        return;
    }

    if(contra.length < 8) {
        mostrarMensaje("Minimo 8 caracteres!");
        return;
    }

    if (!/\d/.test(contra)) {
        mostrarMensaje("Minimo un digito!");
        return;
    }

    //confirmacion
    if(conf !== contra) {
        mostrarMensaje("Las contraseñas no coinciden pues mmvg!");
        return;
    }

    //edad
    if (edad === "") {
        mostrarMensaje("Campo edad vacio");
        return;
    }

    if (edad < 18 || edad > 99) {
        mostrarMensaje("Debe estar entre 18 y 99");
        return;
    }

    correcto("Registro completado con éxito!");
}

function validarEmail(email) {
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patron.test(email);
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.innerText = "";
        mensaje.style.display = "none";
    }, 5000)
}

function correcto(msg) {
    let mensaje = document.getElementById("id_correcto");
    mensaje.innerText = msg;
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.innerText = "";
        mensaje.style.display = "none";
    }, 5000)
}