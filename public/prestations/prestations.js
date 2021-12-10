const mouseTarget = document.addEventListener("click", (e) => {
  console.log(e.target);
});
const btnHome = document.querySelector(".prestation__header__home");

window.addEventListener("scroll", () => {
  scrollValue =
    (window.innerHeight + window.scrollY) / document.body.offsetHeight;
  // console.log(scrollValue);
  // console.log(innerWidth);
  // console.log(innerHeight);
  if (
    (scrollValue > 0.14) & (innerWidth > 1024) ||
    (scrollValue > 0.147) & (innerWidth <= 1024) ||
    (scrollValue > 0.185) & (innerWidth <= 400)
  ) {
    btnHome.style.opacity = "1";
  } else {
    btnHome.style.opacity = "0";
  }
});
