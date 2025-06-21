const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuOverlay = document.getElementById('menu-overlay');
const closeMenu = document.getElementById('close-menu');
const main = document.querySelector('main');

// --- TEMPLATES ---
const templates = {
    home: `
        <section>
            <h2>Witaj!</h2>
            <p>Zarządzaj swoim czasem efektywnie.</p>
            <img src="logo.png" alt="Logo">
        </section>
        <form>
            <h3>Zaloguj się</h3>
            <input type="tel" pattern="[0-9]{9}" maxlength="9" placeholder="Numer telefonu" required>
            <input type="password" placeholder="Hasło" required>
            <button type="submit">Zaloguj się</button>
            <button type="button" class="registration-link">Nie masz konta? Zarejestruj się</button>
        </form>
    `,
    about: `
        <section>
            <h2>O aplikacji TaskMaster</h2>
            <p>
                TaskMaster to nowoczesna aplikacja do umawiania wizyt dla małych zakładów usługowych: fryzjerów, szewców i wielu innych. <br><br>
                Dzięki niej Twoi klienci mogą samodzielnie sprawdzić wolne terminy i zarezerwować dogodną godzinę przez telefon.<br><br>
                Właściciele otrzymują intuicyjny panel zarządzania, mogą łatwo prowadzić grafik, zarządzać rezerwacjami i obsługiwać swoich klientów bez papierowego kalendarza.<br><br>
                TaskMaster to oszczędność czasu, przejrzystość i nowoczesność dla Twojego biznesu!
            </p>
        </section>
    `,
    author: `
        <section>
            <h2>O twórcy</h2>
            <p>
                Autorem aplikacji jest <b>Wolfgang XXIII</b>.<br>
                <b>Strona:</b> <a href="http://wolfgangxxiii.org/" target="_blank" rel="noopener">wolfgangxxiii.org</a><br>
                <b>Email:</b> <a href="mailto:wolfgangxxiii@protonmail.com">wolfgangxxiii@protonmail.com</a><br>
                <b>Github:</b> <a href="https://github.com/wolfgangxxiii" target="_blank" rel="noopener">github.com/wolfgangxxiii</a>
            </p>
            <p>
                Jeśli masz pytania, sugestie lub chcesz wdrożyć podobne rozwiązanie w swoim biznesie – śmiało skontaktuj się!
            </p>
        </section>
    `
};

// --- MENU LOGIKA ---
menuToggle.addEventListener('click', function (e) {
    menu.classList.toggle('show-menu');
    menuOverlay.classList.toggle('show');
    e.stopPropagation();
});
menuOverlay.addEventListener('click', function () {
    menu.classList.remove('show-menu');
    menuOverlay.classList.remove('show');
});
closeMenu.addEventListener('click', function () {
    menu.classList.remove('show-menu');
    menuOverlay.classList.remove('show');
});
document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('show-menu');
        menuOverlay.classList.remove('show');
    }
});

// --- Dynamiczna podmiana treści po kliknięciu w menu ---
menu.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.getAttribute('data-page');
        if (templates[page]) {
            main.innerHTML = templates[page];
        }
        menu.classList.remove('show-menu');
        menuOverlay.classList.remove('show');
        window.scrollTo(0,0); // wróć na górę
    });
});

// --- Przywróć stronę domyślną na start ---
main.innerHTML = templates.home;
