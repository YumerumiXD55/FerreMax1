document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Obtener los valores del formulario
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Validar el inicio de sesión (aquí puedes implementar tu lógica de validación)
        if (email === 'usuario@example.com' && password === 'contraseña') {
            // Inicio de sesión correcto
            // Redirigir a la página de inicio o realizar otras acciones
            window.location.href = 'dashboard.html'; // Redirigir a la página de inicio después del inicio de sesión exitoso
        } else {
            // Inicio de sesión incorrecto
            // Mostrar un mensaje de error
            var errorMessage = document.getElementById('error-message');
            errorMessage.textContent = 'Correo electrónico o contraseña incorrectos. Por favor, inténtalo de nuevo.';
        }
    });
});