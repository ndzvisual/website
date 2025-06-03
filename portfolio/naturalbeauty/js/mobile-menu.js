export function initMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (!menuButton || !mobileMenu) return;

    const menuIcon = menuButton.querySelector('i');
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        const isOpen = mobileMenu.classList.contains('open');
        menuIcon.classList.toggle('fa-bars', !isOpen);
        menuIcon.classList.toggle('fa-times', isOpen);
        menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
        menuButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}
