// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Scroll reveal for .fade-in elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Interactive pinch cup demo
const cupTop = document.getElementById('pinch-top');
const heroCup = document.getElementById('hero-cup');
let pinched = false;

heroCup.addEventListener('click', () => {
  pinched = !pinched;
  cupTop.classList.toggle('pinched', pinched);
});

// Waitlist form
document.getElementById('waitlist-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = "🤏 You're on the list! We'll pinch you when it's time.";
  e.target.reset();
});
