//-------------------------------------------------------------
//                    TEXT TAPING EFFECT
//-------------------------------------------------------------
const target = document.getElementById("target");
let array = [
  "soirées",
  "mariages",
  "anniversaires",
  "entreprises",
  "événements",
];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];
  setTimeout(() => {
    letter.remove();
  }, 2000);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2000);
    }
  }, 60);
};
loop();

//-------------------------------------------------------------
//                   SCROLL EVENT : TRANSITION
//-------------------------------------------------------------
const title1 = document.getElementById("transition__title--1");
const title2 = document.getElementById("transition__title--2");
const title3 = document.getElementById("transition__title--3");
const btnHome = document.querySelector(".header__home");

window.addEventListener("scroll", () => {
  scrollValue =
    (window.innerHeight + window.scrollY) / document.body.offsetHeight;
  console.log(scrollValue);
  console.log(innerWidth);
  if (
    (scrollValue > 0.265) & (innerWidth >= 1024) ||
    (scrollValue > 0.2) & (innerWidth < 1024)
  ) {
    btnHome.style.opacity = "1";
  } else {
    btnHome.style.opacity = "0";
  }
  if (
    (scrollValue > 0.64) & (innerWidth >= 1024) ||
    (scrollValue > 0.53) & (innerWidth < 1024)
  ) {
    title1.style.transform = "translateX(0px)";
  } else {
    title1.style.transform = "translateX(-500px)";
  }
  if (
    (scrollValue > 0.7) & (innerWidth >= 1024) ||
    (scrollValue > 0.615) & (innerWidth < 1024)
  ) {
    title2.style.transform = "translateX(0px)";
  } else {
    title2.style.transform = "translateX(500px)";
  }
  if (
    (scrollValue > 0.7) & (innerWidth >= 1024) ||
    (scrollValue > 0.71) & (innerWidth < 1024)
  ) {
    title3.style.transform = "translateX(0px)";
  } else {
    title3.style.transform = "translateX(-500px)";
  }
});
