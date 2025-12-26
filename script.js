// --- Navigation Toggle ---
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// --- Jahr im Footer ---
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// --- Hero Slider ---
const slides = document.querySelectorAll('.hero-slide');
const dotsContainer = document.querySelector('.dots');
let index = 0;

// Punkte erzeugen
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('span');

function showSlide(i) {
  slides.forEach((s, j) => s.classList.toggle('active', j === i));
  dots.forEach((d, j) => d.classList.toggle('active', j === i));
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

let slideInterval = setInterval(nextSlide, 3000);

// Klick auf Punkte → manuell wechseln
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  });
});