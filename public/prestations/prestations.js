const mouseTarget = document.addEventListener("click", (e) => {
  console.log(e.target);
});
const section = document.getElementsByClassName("prestation");
const choice = document.querySelectorAll(".prestation__choice");
const active = document.getElementById("active");

function activeLink() {
  choice.forEach((item) => item.classList.remove("toggle-active"));
  this.classList.add("toggle-active");
}
choice.forEach((item) => item.addEventListener("click", activeLink));
