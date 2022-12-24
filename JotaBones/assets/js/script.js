const hamburger = document.querySelector('.menu-opener');
const menu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    if (menu.style.display === 'none') {
    menu.style.display = 'block';
    } else {
    menu.style.display = 'none';
    }
});

