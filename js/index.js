
// controls hamburger menu and slide out menu 
let toggleMenuBtn = document.querySelector('.menu-button');
let menu = document.querySelector('.menu');

function toggleMenu(e) {
    toggleMenuBtn.classList.toggle('open');
    menu.classList.toggle('open'); 
}

toggleMenuBtn.addEventListener('click', toggleMenu);


// open mobile menu and enable scroll to sections for all screen sizes 
let menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(anchor => { 
        
    anchor.addEventListener('click', function(event) {
        
        // only for mobile    
        if (window.innerWidth <= 600) {
            toggleMenuBtn.classList.toggle('open');
            menu.classList.toggle('open'); 
        }

        // scroll to different section, need this for all screen sizes 
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        
    });
});

/* scroll to different section, need this for all screen sizes 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        console.log(this.getAttribute('href'));
    });
});
*/

// header shows on scroll up and hides on scroll down 
let header = document.querySelector(".header");
let lastScroll = 0;

document.body.addEventListener("scroll", function() {

  const currentScroll = document.body.scrollTop;

  if (currentScroll <= 0) {
    header.classList.remove("header-hidden");
  } else if (currentScroll > lastScroll && currentScroll > 60) {
    header.classList.add("header-hidden");
  } else {
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
});

// Event clicks for redirects
document.querySelector('#resume').addEventListener("click", function() {
    window.open("https://emilie-wilkie.com/resume.pdf", "_blank");
});

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

document.querySelector('#ttt-live').addEventListener("click", function() {
    window.open("https://ewilkie.github.io/Tic-Tac-Toe/", "_blank");
});

document.querySelector('#ttt-code').addEventListener("click", function() {
    window.open("https://github.com/ewilkie/Tic-Tac-Toe", "_blank");
});
