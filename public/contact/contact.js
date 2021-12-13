const btnHome = document.querySelector(".contact__header__home");

window.addEventListener("scroll", () => {
  scrollValue =
    (window.innerHeight + window.scrollY) / document.body.offsetHeight;
  // console.log(scrollValue);
  // console.log(innerWidth);
  // console.log(innerHeight);
  if (
    (scrollValue > 0.265) & (innerWidth > 1024) ||
    (scrollValue > 0.8) & (innerWidth <= 1024) ||
    (scrollValue > 0.377) & (innerWidth <= 400)
  ) {
    btnHome.style.opacity = "1";
  } else {
    btnHome.style.opacity = "0";
  }
});

//---------------------------------------------------------------
//                          FORMULAIRE
//---------------------------------------------------------------
const form = document.querySelector("form");
const inputs = document.querySelectorAll(
  'input[type="text"],input[type="email"],input[type="tel"],input[type="date"],option[value=""],input[type="number"],textarea'
);
console.log(inputs);
let lastName,
  firstName,
  email,
  phone,
  date,
  place,
  event,
  numberOfGuests,
  message;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

inputs.addEventListener("input", (e) => {
  console.log(e.value);
});
