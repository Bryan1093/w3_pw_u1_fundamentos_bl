function guardar() {
    validarCampos();
}

function validarCampos() {

    let nombre = document.getElementById("id_name").value.trim();
    let numero = document.getElementById("id_number").value.trim();
    let fecha  = document.getElementById("id_date").value.trim();
    let cvv    = document.getElementById("id_cvv").value.trim();

    // --- VALIDACIÓN NOMBRE ---
    if (nombre === "") {
        mostrarMensaje("Campo Nombre Incompleto!");
        return;
    } 
    if (/\d/.test(nombre)) {
        mostrarMensaje("El nombre no puede contener números!");
        return;
    }

    // --- VALIDACIÓN NÚMERO TARJETA ---
    if (numero === "") {
        mostrarMensaje("Campo Número Tarjeta Incompleto!");
        return;
    }
    if (numero.length < 16) {
        mostrarMensaje("Número de Tarjeta debe tener 16 dígitos!");
        return;
    }
    if (numero.length > 16) {
        mostrarMensaje("Número de Tarjeta no puede tener más de 16 dígitos!");
        return;
    }

    // --- VALIDACIÓN FECHA ---
    if (fecha === "") {
        mostrarMensaje("Campo Fecha Incompleto!");
        return;
    }

    // --- VALIDACIÓN CVV ---
    if (cvv === "") {
        mostrarMensaje("Campo CVV incompleto!");
        return;
    }
    
    if (cvv.length < 3) {
        mostrarMensaje("CVV debe tener 3 dígitos!");
        return;
    }
        
    if (cvv.length > 3) {
        mostrarMensaje("CVV no puede tener mas de 3 dígitos!");
        return;
    }

    mostrarMensaje("Datos completados exitosamente!");
}

function mostrarMensaje(msg) {
    let error = document.getElementById("id_msg_error");
    error.innerText = msg;
    error.style.display = "block";

    setTimeout(() => {
        error.style.display = "none";
        error.innerText = "";
    }, 3000);
}