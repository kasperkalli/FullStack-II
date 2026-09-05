document.getElementById('form-login').addEventListener('submit', function(e) {
    e.preventDefault();
    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorCorreo = document.getElementById('error-correo');
    const errorPassword = document.getElementById('error-password');

    errorCorreo.style.display = 'none'; errorPassword.style.display = 'none';
    let valido = true;
    const dominios = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];

    if (!correo || correo.length > 100 || !dominios.some(d => correo.endsWith(d))) {
        errorCorreo.textContent = 'Correo requerido, max 100 char, dominios: @duoc.cl, @profesor.duoc.cl, @gmail.com';
        errorCorreo.style.display = 'block';
        valido = false;
    }
    if (!password || password.length < 4 || password.length > 10) {
        errorPassword.textContent = 'Contraseña requerida (4-10 caracteres).';
        errorPassword.style.display = 'block';
        valido = false;
    }
    if (valido) {
        alert('Ingreso exitoso.');
        window.location.href = 'admin-home.html';
    }
});