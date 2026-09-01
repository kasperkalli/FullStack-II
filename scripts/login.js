document.getElementById('form-login').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Captura de valores
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Captura de contenedores de mensajes de error
    const errorCorreo = document.getElementById('error-correo');
    const errorPassword = document.getElementById('error-password');

    // Limpiar errores previos
    errorCorreo.style.display = 'none';
    errorPassword.style.display = 'none';

    let formularioValido = true;

    // 1. Validación de Correo (Requerido, Max 100, Dominios específicos)
    const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const dominioValido = dominiosPermitidos.some(dominio => correo.endsWith(dominio));

    if (correo === '') {
        mostrarError(errorCorreo, 'El correo es requerido.');
        formularioValido = false;
    } else if (correo.length > 100) {
        mostrarError(errorCorreo, 'El correo no puede exceder los 100 caracteres.');
        formularioValido = false;
    } else if (!dominioValido) {
        mostrarError(errorCorreo, 'Debe ser un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.');
        formularioValido = false;
    }

    // 2. Validación de Contraseña (Requerido, Entre 4 a 10 caracteres)
    if (password === '') {
        mostrarError(errorPassword, 'La contraseña es requerida.');
        formularioValido = false;
    } else if (password.length < 4 || password.length > 10) {
        mostrarError(errorPassword, 'La contraseña debe tener entre 4 y 10 caracteres.');
        formularioValido = false;
    }

    // Acción si todo es correcto
    if (formularioValido) {
        alert('Inicio de sesión exitoso. Redirigiendo al panel...');
        // Redirigir al home del administrador o cliente según corresponda
        window.location.href = 'admin-home.html'; 
    }
});

// Función auxiliar para inyectar los mensajes de error en el HTML
function mostrarError(elemento, mensaje) {
    elemento.textContent = mensaje;
    elemento.style.display = 'block';
}