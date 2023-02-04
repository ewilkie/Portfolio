let toggleMenuBtn = document.querySelector('.menu-button');
let menu = document.querySelector('#menu');

function toggleMenu(e) {
    toggleMenuBtn.classList.toggle('open');
    menu.classList.toggle('open');  
}

toggleMenuBtn.addEventListener('click', toggleMenu);