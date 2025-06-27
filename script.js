const copyright = document.querySelector(`.year`);
const year = new Date().getFullYear();
copyright.textContent = `${year}`;

const navBtn = document.querySelector(`.btn-mobile-nav`);
const header = document.querySelector(`.header-section`);

navBtn.addEventListener(`click`, function () {
  header.classList.toggle(`nav--open`);
});

// SMOOTH SCROLLING BEHAVIOR IN JS. SWITCHED WITH CSS

// const allLinks = document.querySelectorAll(`a`);
// allLinks.forEach((link) => {
//   link.addEventListener(`click`, function (e) {
//     e.preventDefault();
//     const href = link.getAttribute(`href`);
//     if (href === `#`)
//       window.scrollTo({
//         top: 0,
//         behaviour: "smooth",
//       });

//     if (href !== `#` && href.startsWith(`#`)) {
//       const section = document.querySelector(href);
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//     if (link.classList.contains(`section-nav-link`)) header.classList.remove(`nav--open`)
//   });
// });

//  **************************************

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
//   e.preventDefault();
//   if (!e.target.classList.contains(`section-nav-link`)) return;
//   if (e.target === howBtn) howSection.scrollIntoView({ behavior: "smooth" });
//   if (e.target === mealBtn) mealsSection.scrollIntoView({ behavior: "smooth" });
//   if (e.target === testimonialsBtn)
//     testimonialSection.scrollIntoView({ behavior: "smooth" });
//   if (e.target === pricingBtn)
//     pricingSection.scrollIntoView({ behavior: "smooth" });
//   if (e.target === ctaBtn) ctaSection.scrollIntoView({ behavior: "smooth" });
// });
