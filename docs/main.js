// Obtener el ícono de las barras (menú hamburguesa)
var barsIcon = document.querySelector('.bars');

// Obtener la lista del menú
var menu = document.querySelector('.menu-screen');

// Agregar el evento de clic al icono de las barras
barsIcon.addEventListener('click', function() {
    // Alternar la clase 'show' en el menú, para mostrar/ocultar
    menu.classList.toggle('show-menu');
});
