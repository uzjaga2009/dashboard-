let arrow = document.querySelectorAll(".arrow");

arrow.forEach((btnArrow) => {
  btnArrow.addEventListener("click", () => {
    let arrowParent = btnArrow.parentElement.parentElement;
    arrowParent.classList.toggle("show-menu");
  });
});

var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

