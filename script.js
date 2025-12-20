(function () {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // close on link click
    menu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Reservation form => opens mail client (simple + GitHub pages friendly)
  const form = document.getElementById("reserveForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get("name");
      const phone = data.get("phone");
      const date = data.get("date");
      const time = data.get("time");
      const people = data.get("people");
      const wish = data.get("wish");
      const message = data.get("message");

      const subject = encodeURIComponent("Reservierungsanfrage – La Legna");
      const body = encodeURIComponent(
        `Hallo La Legna,\n\nich möchte gerne reservieren:\n\n` +
        `Name: ${name}\nTelefon: ${phone}\nDatum: ${date}\nUhrzeit: ${time}\nPersonen: ${people}\nWunsch: ${wish}\n\n` +
        `Nachricht: ${message || "-"}\n\nDanke!`
      );

      // TODO: Replace email address
      window.location.href = `mailto:reservierung@deinrestaurant.de?subject=${subject}&body=${body}`;
    });
  }
})();
