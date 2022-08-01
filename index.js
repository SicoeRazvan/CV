function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}

var activePage = "skills";

function showPage(nextPage) {
  console.warn("change", activePage, "to", nextPage);
  hide(activePage);
  show(nextPage);
  document
    .querySelector(`a[data-page=${activePage}]`)
    .classList.remove("active");
  document.querySelector(`a[data-page=${nextPage}]`).classList.add("active");
  activePage = nextPage;
}

function initEvents() {
  document
    .getElementById("top-menu-bar")
    .addEventListener("click", function (e) {
      if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
      }
    });
}

showPage(activePage);
initEvents();

function displaySkills() {
  console.info("Display skills");
  for (var i = 0; i <= 10; i++) {
    console.info(`${i} * 5 = ${i * 5}`);
  }
}

var ul = document.querySelector("#skills ul");
var skills = ["html", "css", "js"];
console.info(ul);

for (var i = 0; i < skills.length; i++) {
  ul.innerHTML += `<li>${skills[i]}</li>`; 
  
}
//displaySkills();
