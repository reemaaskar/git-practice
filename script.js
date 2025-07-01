let lastScrollTop = 0;
const image = document.getElementById('scroll-image');

window.addEventListener('scroll', function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    image.style.opacity = '0.3';
    image.style.filter = 'brightness(0)';
  } else {
    // Scrolling up
    image.style.opacity = '1';
    image.style.filter = 'brightness(1)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});
