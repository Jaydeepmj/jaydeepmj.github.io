let currentLang = "de"; // ✅ Default language is now German

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

window.onload = function () {
  showSection("about");
  const toggleButton = document.getElementById("lang-toggle");
  toggleButton.textContent = currentLang === "en" ? "Deutsch" : "English";
};
