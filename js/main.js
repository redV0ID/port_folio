'use strict';

const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');

let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!notShowMenu) {
        hamburger.classList.add('open');
        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        showMenu = false;
    }
}