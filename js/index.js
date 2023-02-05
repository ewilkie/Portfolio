let toggleMenuBtn = document.querySelector('.menu-button');
let menu = document.querySelector('.menu');

function toggleMenu(e) {
    toggleMenuBtn.classList.toggle('open');
    menu.classList.toggle('open'); 
}

toggleMenuBtn.addEventListener('click', toggleMenu);




let menuLinks = document.querySelectorAll('.menu-link');

for (let i = 0; i < menuLinks.length; i++) {
  menuLinks[i].addEventListener('click', function(event) {
    event.preventDefault();
    setTimeout(function() {
      window.location.href = menuLinks[i].getAttribute("href");
    }, 500);

    toggleMenuBtn.classList.toggle('open');
    menu.classList.toggle('open'); 

  });
}

