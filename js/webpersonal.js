const hamburger = document.querySelector('.header .navbar .nav-list .hamburger');
const mobileMenu = document.querySelector('.header .navbar .nav-list ul');
const menuItem = document.querySelectorAll('.header .navbar .nav-list ul li a');
const header = document.querySelector('.header.container');
var date = new Date();
var year = date.getFullYear();

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 250) {
        //header.style.backgroundColor = '#29323c';
        header.style.backgroundColor = '#212121';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
});


document.querySelector('.copyright').innerHTML = '© '+year+' Nereo Ontiveros';
