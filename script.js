let currentLang = "de";

function showSection(id) {
  document.querySelectorAll("main .content").forEach(section => {
    section.classList.remove("active");
  });

  document.querySelectorAll(`main .content.lang-${currentLang}`).forEach(section => {
    if (section.id === id) section.classList.add("active");
  });
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "de" : "en";
  let active = document.querySelector("main .content.active");
  if (active) showSection(active.id);

  const toggleButton = document.getElementById("lang-toggle");
  toggleButton.textContent = currentLang === "en" ? "Deutsch" : "English";
}

function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌙";
  } else {
    themeToggle.textContent = "☀️";
  }
}

window.onload = function () {
  showSection("about");
  const toggleButton = document.getElementById("lang-toggle");
  toggleButton.textContent = currentLang === "en" ? "Deutsch" : "English";
  document.getElementById("theme-toggle").textContent =
  document.body.classList.contains("light-mode") ? "🌙" : "☀️";
};
