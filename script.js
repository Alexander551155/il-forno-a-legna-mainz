// Mobile navigation toggle
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple lightbox (optional)
document.querySelectorAll(".gallery-grid img").forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}" />`;
    lightbox.addEventListener("click", () => lightbox.remove());
    document.body.appendChild(lightbox);
  });
});