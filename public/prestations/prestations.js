const color1 = "#0a0252";
const color8 = "#f0f5ff";

const mouseTarget = document.addEventListener("click", (e) => {
  console.log(e.target);
});
const section = document.getElementsByClassName("prestation");
const btn1 = document.getElementById("choice-1");

btn1.addEventListener("click", () => {
  btn1.style.background = color8;
  btn1.style.color = color1;
  btn1.style.border = "1px solid #0a0252";
  btn1.style.borderBottom = "none";
  btn1.style.fontWeight = "bold";
});
