const hamburger = document.querySelector('.menu-opener');
const menu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    if (menu.style.display === 'none') {
    menu.style.display = 'block';
    } else {
    menu.style.display = 'none';
    }
});

function toTop() {
    window.scrollTo(0, 0);
}

function disappearButton () {
    if (window.scrollY === 0) {
        document.querySelector('.scrollbutoon').style.display = 'none';
    } else {
        document.querySelector('.scrollbutoon').style.display = 'block';
    }
}

window.addEventListener('scroll', disappearButton);
    



