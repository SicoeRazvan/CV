function showHomePage() {
  //hidePages();
  hidePage("home");
  hidePage("skills");
  hidePage("languages");
  showPage("home");
}

function showSkillsPage() {
  //hidePages();
  hidePage("home");
  hidePage("projects");
  hidePage("languages");
  showPage("skills");
}

function showProjectsPage() {
  //hidePages();
  hidePage("home");
  hidePage("skills");
  hidePage("languages");
  showPage("projects");
}

function showLanguagesPage() {
  //hidePages();
  hidePage("home");
  hidePage("skills");
  hidePage("projects");
  showPage("languages");
}

function hidePage(id) {
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  document.getElementById(id).style.display = "block";
}

// function hidePages() {
//   const pages = Array.from(document.getElementsByClassName("page"));
//   pages.forEach((page) => hide(page.id));
// }

// function hide(id) {
//   document.getElementById(id).style.display = "none";
// }

showHomePage();
