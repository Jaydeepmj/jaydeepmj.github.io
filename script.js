
function showSection(id) {
  document.querySelectorAll("main .content").forEach(section => {
    section.classList.remove("active");
  });

  document.querySelectorAll(`main .content.lang-en`).forEach(section => {
    if (section.id === id && currentLang === 'en') section.classList.add("active");
  });

  document.querySelectorAll(`main .content.lang-de`).forEach(section => {
    if (section.id === id && currentLang === 'de') section.classList.add("active");
  });
}

let currentLang = "en";
function toggleLanguage() {
  currentLang = currentLang === "en" ? "de" : "en";
  let active = document.querySelector("main .content.active");
  if (active) showSection(active.id);
}
