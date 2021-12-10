const btnHome = document.querySelector(".legal-notice__header__home");

window.addEventListener("scroll", () => {
  scrollValue =
    (window.innerHeight + window.scrollY) / document.body.offsetHeight;
  //   console.log(scrollValue);
  //   console.log(innerWidth);
  //   console.log(innerHeight);
  if (
    (scrollValue > 0.307) & (innerWidth > 1024) ||
    (scrollValue > 0.345) & (innerWidth <= 1024) ||
    (scrollValue > 0.098) & (innerWidth <= 400)
  ) {
    btnHome.style.opacity = "1";
  } else {
    btnHome.style.opacity = "0";
  }
});
