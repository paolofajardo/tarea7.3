function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos").checked;

    if (nombre === "" || apellido === "" || email === "" || password1 === "" || password2 === "" || !terminos) {
        showAlertError();
        if (!terminos) {
            alert("Debes aceptar los términos y condiciones.");
        }
    } else if (password1.length < 6) {
        showAlertError();
        alert("La contraseña debe tener al menos 6 caracteres.");
    } else if (password1 !== password2) {
        showAlertError();
        alert("Las contraseñas no coinciden.");
    } else {
        showAlertSuccess();
    }
});