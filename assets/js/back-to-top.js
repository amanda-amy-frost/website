const backToTopBtn = document.getElementById('back-to-top');

function toggleBackToTop() {
  if (window.scrollY > 200) {
    backToTopBtn.classList.add('is-visible');
  } else {
    backToTopBtn.classList.remove('is-visible');
  }
}

window.addEventListener('scroll', toggleBackToTop);

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
