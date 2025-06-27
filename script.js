const copyright = document.querySelector(`.year`);
const year = new Date().getFullYear();
copyright.textContent = `${year}`;

const navBtn = document.querySelector(`.btn-mobile-nav`);
const header = document.querySelector(`.header-section`);

navBtn.addEventListener(`click`, function () {
  header.classList.toggle(`nav--open`);
});

// SMOOTH SCROLLING BEHAVIOR IN JS. SWITCHED WITH CSS 

// const navBar = document.querySelector(`.nav-bar`);

// const howBtn = document.querySelector(`#how`);
// const howSection = document.querySelector(`.section-how`);

// const mealBtn = document.querySelector(`#meals`);
// const mealsSection = document.querySelector(`.meals-section`);

// const testimonialsBtn = document.querySelector(`#testimonials`);
// const testimonialSection = document.querySelector(`.testimonials-section`);

// const pricingBtn = document.querySelector(`#pricing`);
// const pricingSection = document.querySelector(`.section-pricing`);

// const ctaBtn = document.querySelector(`#cta`);
// const ctaSection = document.querySelector(`.cta-section`);

// navBar.addEventListener(`click`, function (e) {
//   if (!e.target.classList.contains(`section-nav-link`)) return;
//   if (e.target === howBtn) howSection.scrollIntoView({ behavior: "smooth" });
//   if (e.target === mealBtn) mealsSection.scrollIntoView({ behavior: "smooth" });
//   if (e.target === testimonialsBtn)
//     testimonialSection.scrollIntoView({ behavior: "smooth" });
//   if (e.target === pricingBtn)
//     pricingSection.scrollIntoView({ behavior: "smooth" });
//   if (e.target === ctaBtn) ctaSection.scrollIntoView({ behavior: "smooth" });
// });
