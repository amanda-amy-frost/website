const backToTopBtn = document.getElementById('back-to-top');
const ring = document.querySelector('.ring-progress');
const ringWrapper = document.querySelector('.scroll-ring');
const circumference = 2 * Math.PI * 45; // radius from circle svg in index.html

function updateScrollRing() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollTop / docHeight;

  ring.style.strokeDashoffset = circumference - (progress * circumference);
}

function toggleBackToTop() {
  if (window.scrollY > 200) {
    backToTopBtn.classList.add('is-visible');
    ringWrapper.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('is-visible');
    ringWrapper.classList.remove('visible');
  }
}

window.addEventListener('scroll', () => {
  toggleBackToTop();
  updateScrollRing();
}, { passive: true });

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
