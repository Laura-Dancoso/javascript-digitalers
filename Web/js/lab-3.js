var rol = prompt("Ingrese su rol (Admin/Recursos):");
var volver="<button type='button'class='btn btn-secondary'onclick='window.location.reload()'>Ingresar nuevamente</button>";
if (rol.toLowerCase() === "admin" || rol.toLowerCase() === "recursos") {
    if (parseInt(prompt("Ingrese la clave:")) == 1234) {
        let usuario = prompt("Ingrese su usuario (asegúrese de escribir su usuario, de lo contrario le dará error) ")
        if (usuario != "") {
            document.write("<div class='alert alert-success' role='alert'>Hola " + usuario + ", bienvenida/o a nuestra aplicación!</div>");
            document.write(volver);

        } else {
            error();
        }
    } else {
        error();
    }

} else {
    error();
}
function error() {
    window.location.href = "error.html";
}