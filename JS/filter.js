const slides = document.querySelectorAll(".testimonial-slide");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 6000); // troca a cada 6 segundos
const cards = document.querySelectorAll(".partner-card");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

cards.forEach((card) => observer.observe(card));
