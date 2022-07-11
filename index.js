function showHomePage() {
  hidePages();
  document.getElementById("home").style.display = "block";
}

function showSkillsPage() {
  hidePages();
  document.getElementById("skills").style.display = "block";
}

function showProjectsPage() {
  hidePages();
  document.getElementById("projects").style.display = "block";
}

function showLanguagesPage() {
  hidePages();
  document.getElementById("languages").style.display = "block";
}

function hidePages() {
  const pages = Array.from(document.getElementsByClassName("page"));
  pages.forEach((page) => hide(page.id));
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

showHomePage();
