const copyright = document.querySelector(`.year`);
const year = new Date().getFullYear();
copyright.textContent = `${year}`;

const navBtn = document.querySelector(`.btn-mobile-nav`);
const header = document.querySelector(`.header-section`);

navBtn.addEventListener(`click`, function () {
  header.classList.toggle(`nav--open`);
});
