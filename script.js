// --- Navigation Toggle (Mobile) ---
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// --- Aktuelles Jahr im Footer ---
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// --- Lightbox für Galerie ---
document.querySelectorAll(".gallery-grid img").forEach((img) => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";

    const imgEl = document.createElement("img");
    imgEl.src = img.src;
    imgEl.alt = img.alt;

    lightbox.appendChild(imgEl);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", () => {
      lightbox.remove();
    });
  });
});

// --- Schließt Lightbox mit Escape-Taste ---
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const lightbox = document.querySelector(".lightbox");
    if (lightbox) lightbox.remove();
  }
});