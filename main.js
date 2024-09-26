swiper
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

document.addEventListener('scroll', function() {
  // Get all section elements
  const sections = document.querySelectorAll('section');
  
  // Get all links in the navbar
  const navLinks = document.querySelectorAll('.navbar a');

  let currentSection = '';

  // Iterate over sections to find the one currently in view
  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
      }
  });

  // Remove 'home-active' class from all links and add it to the current section link
  navLinks.forEach(link => {
      link.classList.remove('home-active');
      if (link.getAttribute('href').substring(1) === currentSection) {
          link.classList.add('home-active');
      }
  });
});
