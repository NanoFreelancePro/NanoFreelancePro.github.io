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

window.addEventListener("scroll", () => {
  if (window.scrollY > 1600) {
    title1.style.transform = "translateX(0px)";
    title2.style.transform = "translateX(0px)";
    title3.style.transform = "translateX(0px)";
  } else {
    title1.style.transform = "translateX(-500px)";
    title2.style.transform = "translateX(500px)";
    title3.style.transform = "translateX(-500px)";
  }
  if (window.scrollY > 1800) {
    title2.style.transform = "translateX(0px)";
  } else {
    title2.style.transform = "translateX(500px)";
  }
  if (window.scrollY > 1950) {
    title3.style.transform = "translateX(0px)";
  } else {
    title3.style.transform = "translateX(-500px)";
  }
});
