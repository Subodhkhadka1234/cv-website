// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // THEME TOGGLE
  const themeToggleBtn = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light") {
    document.body.classList.add("light-theme");
    if (themeToggleBtn) themeToggleBtn.textContent = "🌙";
  } else {
    if (themeToggleBtn) themeToggleBtn.textContent = "☀️";
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const isLight = document.body.classList.toggle("light-theme");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      themeToggleBtn.textContent = isLight ? "🌙" : "☀️";
    });
  }

  // SIMPLE SCROLL REVEAL
  const revealElements = document.querySelectorAll(
    ".section-content, .timeline-item, .project-card, .education-item, .contact-form, .hero-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
});
