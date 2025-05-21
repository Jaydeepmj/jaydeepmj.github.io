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
  currentLang = currentLang === "de" ? "en" : "ede";
  let active = document.querySelector("main .content.active");
  if (active) showSection(active.id);

  // Update the toggle button text
  const toggleButton = document.getElementById("lang-toggle");
  toggleButton.textContent = currentLang === "de" ? "English" : "Deutsch";
}

// Show the default section on page load
window.onload = function () {
  showSection("about");
};
