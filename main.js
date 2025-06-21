document.getElementById('menu-toggle').addEventListener('click', function (e) {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show-menu');
    e.stopPropagation();
});

document.addEventListener('click', function (e) {
    var menu = document.getElementById('menu');
    var toggle = document.getElementById('menu-toggle');
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('show-menu');
    }
});
