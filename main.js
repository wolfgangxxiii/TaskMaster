const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuOverlay = document.getElementById('menu-overlay');
const closeMenu = document.getElementById('close-menu');

menuToggle.addEventListener('click', function (e) {
    menu.classList.toggle('show-menu');
    menuOverlay.classList.toggle('show');
    e.stopPropagation();
});

// Zamknij menu po kliknięciu w overlay
menuOverlay.addEventListener('click', function () {
    menu.classList.remove('show-menu');
    menuOverlay.classList.remove('show');
});

// Zamknij menu po kliknięciu w krzyżyk
closeMenu.addEventListener('click', function () {
    menu.classList.remove('show-menu');
    menuOverlay.classList.remove('show');
});

// Zamknij menu po kliknięciu poza menu i hamburgera
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('show-menu');
        menuOverlay.classList.remove('show');
    }
});
