document.getElementById('form-registro').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo-reg').value.trim();
    const pass = document.getElementById('pass-reg').value.trim();
    const passConf = document.getElementById('pass-conf').value.trim();

    if (nombre === '') {
        alert('El nombre es obligatorio.');
        return;
    }

    const dominios = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    if (!dominios.some(d => correo.endsWith(d))) {
        alert('El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com');
        return;
    }

    if (pass.length < 4 || pass.length > 10) {
        alert('La contraseña debe tener entre 4 y 10 caracteres.');
        return;
    }

    if (pass !== passConf) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    alert('Usuario registrado correctamente.');
    window.location.href = 'login.html';
});