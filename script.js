function showSection(id) {
  const sections = document.querySelectorAll("main section");
  sections.forEach((section) => {
    section.style.display = section.id === id ? "block" : "none";
  });
}
