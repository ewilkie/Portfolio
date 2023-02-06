
// controls hamburger menu and slide out menu 
let toggleMenuBtn = document.querySelector('.menu-button');
let menu = document.querySelector('.menu');

function toggleMenu(e) {
    toggleMenuBtn.classList.toggle('open');
    menu.classList.toggle('open'); 
}

toggleMenuBtn.addEventListener('click', toggleMenu);



// mobile menu functionality for navigating to different sections 
let menuLinks = document.querySelectorAll('.menu-link');

if (window.innerWidth <= 600) {
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', function(event) {
    
    // delay only applies to mobile menu
    /* if (window.innerWidth <= 600) {
        
        event.preventDefault();
        setTimeout(function() {
        window.location.href = menuLinks[i].getAttribute("href");
        }, 500);
    */    
        toggleMenuBtn.classList.toggle('open');
        menu.classList.toggle('open'); 
    
        });
    }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});
