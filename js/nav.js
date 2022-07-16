const nav = document.querySelector('nav');

function isExpanded() {
  const hamburger = document.querySelector('#hamburger');
  const isExpanded = hamburger.getAttribute('aria-expanded');
  return isExpanded === "true";
}

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 50) {
    nav.classList.add('bg-black');
  }
  else if (!isExpanded()) {
    nav.classList.remove('bg-black');
  }
});

function changeBg() {
  if (isExpanded() || window.pageYOffset > 50) {
    nav.classList.add('bg-black');
  }
  else {
    nav.classList.remove('bg-black');
  }
}