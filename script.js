const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
});
menu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const revealedItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.15 });
revealedItems.forEach((item) => revealObserver.observe(item));

const bloom = document.querySelector('.scroll-bloom');
window.addEventListener('scroll', () => {
  const progress = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
  bloom.style.setProperty('--bloom-progress', progress);
}, { passive: true });
