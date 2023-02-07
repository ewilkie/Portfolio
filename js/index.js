
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


    for (let i = 0; i < menuLinks.length; i++) {
        
         menuLinks[i].addEventListener('click', function(event) {
        
            if (window.innerWidth <= 600) {
        // delay only applies to mobile menu
        
            /*
            event.preventDefault();
            setTimeout(function() {
            window.location.href = menuLinks[i].getAttribute("href");
            }, 500);
            */
            toggleMenuBtn.classList.toggle('open');
            menu.classList.toggle('open'); 
        }

        });
    
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
        });
    });
});

// Event clicks for redirects

// add event click for resume 


document.querySelector('#github').addEventListener("click", function() {
    window.open("https://github.com/ewilkie", "_blank");
});

document.querySelector('#linkedin').addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/emilie-wilkie/", "_blank");
});

document.querySelector('#hg-live').addEventListener("click", function() {
    window.open("https://ewilkie.github.io/GA-Final-Project/", "_blank");
});

document.querySelector('#hg-code').addEventListener("click", function() {
    window.open("https://github.com/ewilkie/GA-Final-Project", "_blank");
});

document.querySelector('#port-live').addEventListener("click", function() {
    window.open("https://ewilkie.github.io/Portfolio/", "_blank");
});

document.querySelector('#port-code').addEventListener("click", function() {
    window.open("https://github.com/ewilkie/Portfolio", "_blank");
});
