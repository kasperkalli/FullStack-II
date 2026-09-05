document.getElementById('form-registro')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const correo = document.getElementById('correo-reg').value.trim();
    const pass = document.getElementById('pass-reg').value.trim();
    const passConf = document.getElementById('pass-conf').value.trim();
    const dominios = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];

    if (!dominios.some(d => correo.endsWith(d))) return alert('Dominio de correo inválido.');
    if (pass.length < 4 || pass.length > 10) return alert('Contraseña debe tener entre 4 y 10 caracteres.');
    if (pass !== passConf) return alert('Las contraseñas no coinciden.');
    
    alert('Usuario registrado.');
    window.location.href = 'login.html';
});