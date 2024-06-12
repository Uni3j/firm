document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
        if (navbar.style.display === 'block') {
            navbar.style.display = 'none';
        } else {
            navbar.style.display = 'block';
        }
    });
});
