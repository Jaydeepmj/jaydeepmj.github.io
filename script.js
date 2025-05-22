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
  const active = document.querySelector("main .content.active");
  if (active) showSection(active.id);

  // Language toggle label
  document.getElementById("lang-toggle").textContent =
    currentLang === "en" ? "Deutsch" : "English";

  // Nav button labels
  const labels = {
    en: {
      about: "About",
      experience: "Experience",
      projects: "Projects"
    },
    de: {
      about: "Über mich",
      experience: "Erfahrung",
      projects: "Projekte"
    }
  };

  document.getElementById("btn-about").textContent = labels[currentLang].about;
  document.getElementById("btn-experience").textContent = labels[currentLang].experience;
  document.getElementById("btn-projects").textContent = labels[currentLang].projects;
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
