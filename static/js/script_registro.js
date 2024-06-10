document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById('nombre').value.trim();
    let apellido = document.getElementById('apellido').value.trim();
    let telefono = document.getElementById('telefono').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirm-password').value.trim();
    let errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';

    if (nombre.length < 3) {
        errorMessage.textContent = 'Nombre inválido. Debe tener al menos 3 caracteres.';
        return;
    }

    if (apellido.length < 3) {
        errorMessage.textContent = 'Apellido inválido. Debe tener al menos 3 caracteres.';
        return;
    }

    if (telefono.length !== 9 || !/^\d+$/.test(telefono)) {
        errorMessage.textContent = 'Número telefónico inválido. Debe tener 9 caracteres numéricos.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Correo electrónico inválido.';
        return;
    }

    if (password.length < 8) {
        errorMessage.textContent = 'Contraseña inválida. Debe tener al menos 8 caracteres.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Las contraseñas no coinciden.';
        return;
    }

    alert('Registro exitoso');

    // Limpiar el formulario
    document.getElementById('registerForm').reset();

    // Redirigir al index.html
    window.location.href = 'index.html';
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}
