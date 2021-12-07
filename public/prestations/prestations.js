const mouseTarget = document.addEventListener("click", (e) => {
  console.log(e.target);
});
const section = document.getElementsByClassName("prestation");
const active = document.getElementById("active");
const btn0 = document.getElementById("choice-0");
const btn1 = document.getElementById("choice-1");
const btn2 = document.getElementById("choice-2");
const btn3 = document.getElementById("choice-3");
const btn4 = document.getElementById("choice-4");

btn0.addEventListener("click", () => {
  btn0.classList.toggle("toggle-active");
  btn1.classList.remove("toggle-active");
  btn2.classList.remove("toggle-active");
  btn3.classList.remove("toggle-active");
  btn4.classList.remove("toggle-active");
});
btn1.addEventListener("click", () => {
  btn0.classList.remove("toggle-active");
  btn1.classList.toggle("toggle-active");
  btn2.classList.remove("toggle-active");
  btn3.classList.remove("toggle-active");
  btn4.classList.remove("toggle-active");
});
btn2.addEventListener("click", () => {
  btn0.classList.remove("toggle-active");
  btn1.classList.remove("toggle-active");
  btn2.classList.toggle("toggle-active");
  btn3.classList.remove("toggle-active");
  btn4.classList.remove("toggle-active");
});
btn3.addEventListener("click", () => {
  btn0.classList.remove("toggle-active");
  btn1.classList.remove("toggle-active");
  btn2.classList.remove("toggle-active");
  btn3.classList.toggle("toggle-active");
  btn4.classList.remove("toggle-active");
});
btn4.addEventListener("click", () => {
  btn0.classList.remove("toggle-active");
  btn1.classList.remove("toggle-active");
  btn2.classList.remove("toggle-active");
  btn3.classList.remove("toggle-active");
  btn4.classList.toggle("toggle-active");
});
