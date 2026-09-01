document.getElementById('form-contacto').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre-cont').value.trim();
    const correo = document.getElementById('correo-cont').value.trim();
    const comentario = document.getElementById('comentario').value.trim();
    
    // Validar Nombre (Max 100)
    if (nombre === '' || nombre.length > 100) {
        alert('El nombre es requerido y debe tener máximo 100 caracteres.');
        return;
    }

    // Validar Correo
    const dominios = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const correoValido = dominios.some(d => correo.endsWith(d));
    if (!correoValido || correo.length > 100) {
        alert('Use un correo válido (@duoc.cl, @profesor.duoc.cl, @gmail.com) de máximo 100 caracteres.');
        return;
    }

    // Validar Comentario (Max 500)
    if (comentario === '' || comentario.length > 500) {
        alert('El comentario es requerido y no puede superar los 500 caracteres.');
        return;
    }

    alert('¡Mensaje enviado con éxito!');
    this.reset();
});