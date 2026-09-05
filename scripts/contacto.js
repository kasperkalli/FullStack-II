document.getElementById('form-contacto')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre-cont').value.trim();
    const correo = document.getElementById('correo-cont').value.trim();
    const comentario = document.getElementById('comentario').value.trim();
    const dominios = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];

    if (nombre.length > 100) return alert('Nombre muy largo (Max 100).');
    if (!dominios.some(d => correo.endsWith(d))) return alert('Dominio de correo inválido.');
    if (comentario.length > 500) return alert('Comentario muy largo (Max 500).');

    alert('Mensaje enviado correctamente.');
    this.reset();
});