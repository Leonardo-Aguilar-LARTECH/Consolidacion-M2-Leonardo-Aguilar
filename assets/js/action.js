function validarDatos() {
    const nombre = document.getElementById('name').value
    const correo = document.getElementById('correo').value;
    const fono = document.getElementById('phone').value;
    const contenido = document.getElementById("contenido");

    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const fonoValido = /(^[0-9]{9})$/;

    if (nombre == "") {
        alert("Por Favor ingresa tu Nombre")
    } else if (!correoValido.test(correo)) {
        alert('Por Favor Ingresa un Correo Válido');
    } else if (!fonoValido.test(fono)) {
        alert('Por Favor Ingresa Un Teléfono Válido');
    } else {
        contenido.innerHTML = nombre + ": Gracias por tu mensaje,\n aqui tienes algunas Imagenes que te podrian gustar.\n Espero que sean de tu agrado.";
        document.getElementById("gift").style.display = "block";
    }
}

window.onload = function () {
    document.getElementById("EnvioValidado").addEventListener("click", validarDatos);
}