
function showPage(id){
  console.warn("Please show me this page " +id);
  hideAllPages();
  show(id);
}

function hideAllPages() {
  hide("home");
  hide("skills");
  hide("projects");
  hide("languages");
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function show(id) {
  document.getElementById(id).style.display = "block";
}

showPage("home");