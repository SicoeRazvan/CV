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
  var ul = document.querySelector("#skills ul");
  var skills = [
    { name: "js", endorcements: 15, favorite: true },
    { name: "html", endorcements: 5, favorite: true },
    { name: "css", endorcements: 10, favorite: false },
  ];

  skills.sort(function (a, b) {
    return b.endorcements - a.endorcements;
    // if (a.name.toLowerCase() < b.name.toLowerCase()) {
    //   return -1;
    // }

    // if (a.name.toLowerCase() > b.name.toLowerCase()) {
    //   return 1;
    // }

    // return 0;
  });

  
  favorite = [true, true.false];
  for (var i = 0; i < skills.length; i++) {
    ul.innerHTML += `<li>${skills[i].name} - ${skills[i].endorcements}</li>`;
  }
}

displaySkills();
