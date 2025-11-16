function guardar() {
    validarDatos();
}

function validarDatos() {
    let nombre = document.getElementById("id_name").value.trim();
    let numero = document.getElementById("id_numero").value.trim();
    let fecha = document.getElementById("id_exp").value.trim();
    let cvv = document.getElementById("id_cvv").value.trim();

    if(nombre === "") {
        mostrarMensaje("Nombre esta incompleto!");
        return;
    }

    if(/\d/.test(nombre)) {
        mostrarMensaje("Nombre no puede tener digitos!");
        return;
    }

    if(numero === "") {
        mostrarMensaje("Numero esta incompleto!");
        return;
    }

    if(numero.length > 16) {
        mostrarMensaje("Numero no puede tener mas de 16 digitos!");
        return;
    }

    if(numero.length < 16) {
        mostrarMensaje("Numero debe tener 16 digitos!");
        return;
    }

    if(fecha === "") {
        mostrarMensaje("Fecha esta incompleto!");
        return;
    }

    if(cvv === "") {
        mostrarMensaje("CVV esta incompleto!");
        return;
    }

    if(cvv.length < 3) {
        mostrarMensaje("CVV son 3 digitos!");
        return;
    }

    if(cvv.length > 3) {
        mostrarMensaje("CVV no puede tener mas de 3 digitos!");
        return;
    }

    mostrarMensaje("Datos llenados correctamente!")
}

function mostrarMensaje(msg) {
    let mensaje = document.getElementById("id_msg_error");
    mensaje.innerText = msg;
    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.display = "none",
        mensaje.innerText = "";
    }, 3000);
}