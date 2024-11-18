document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón del menú móvil (icono de barras)
    var barsButton = document.querySelector('.bars');

    // Obtener el menú de la pantalla
    var menuScreen = document.querySelector('.menu-screen');

    // Agregar un evento de clic al ícono de barras
    barsButton.addEventListener('click', function() {
        // Alternar la clase 'show-menu' en el menú para mostrar u ocultar
        menuScreen.classList.toggle('show-menu');
    });

    // Agregar eventos de clic a los enlaces del menú para hacer scroll suave
    var menuLinks = document.querySelectorAll('.menu-screen a');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Prevenir el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtener el ID de la tarjeta a mostrar desde el atributo href del enlace
            var targetId = link.getAttribute('href').substring(1);

            // Ocultar el menú después de hacer clic
            menuScreen.classList.remove('show-menu');

            // Desplazarse a la sección correspondiente
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});
