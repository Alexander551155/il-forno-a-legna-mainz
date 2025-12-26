// ===== NAVIGATION =====
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
if (navToggle) {
  navToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
}

// ===== FOOTER YEAR =====
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ===== HERO FADE SLIDER =====
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const intervalTime = 6000; // 6 Sekunden pro Bild

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}
setInterval(nextSlide, intervalTime);
