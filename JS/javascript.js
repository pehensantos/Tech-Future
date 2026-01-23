document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Toggle para o menu hamburger
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Alterna o ícone entre barras e 'X'
        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            hamburger.setAttribute('aria-label', 'Fechar menu');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            hamburger.setAttribute('aria-label', 'Abrir menu');
        }
    });

    // Fecha o menu ao clicar em um link (para SPAs)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                hamburger.setAttribute('aria-label', 'Abrir menu');
            }
        });
    });
});