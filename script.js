// Sticky nav highlight
const navLinks = document.querySelectorAll('.nav-link, nav a');
const sections = document.querySelectorAll('section');

function onScroll() {
  let scrollPos = window.scrollY + 80;
  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === section.id) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', onScroll);

// Smooth scroll for nav links
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Typing effect for headline
const headline = document.getElementById('headline');
const headlineText = 'Welcome to My Portfolio';
let typeIdx = 0;
function typeHeadline() {
  if (typeIdx <= headlineText.length) {
    headline.textContent = headlineText.slice(0, typeIdx);
    typeIdx++;
    setTimeout(typeHeadline, 80);
  }
}
window.addEventListener('DOMContentLoaded', typeHeadline);

// Contact form (basic validation)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
  });
}

// Fade-in animation for sections on scroll
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll('.section');
  const trigger = window.innerHeight * 0.92;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < trigger) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSectionsOnScroll);
window.addEventListener('DOMContentLoaded', revealSectionsOnScroll); 