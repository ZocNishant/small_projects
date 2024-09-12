const textBox = document.querySelector("#text");

const countBtn = document.querySelector("#countBtn");

let vowelCounter;
let countOfA;
let countOfE;
let countOfI;
let countOfO;
let countOfU;

countBtn.addEventListener("click", function () {
  let text = textBox.value.split("");

  text.forEach((alphabet) => {
    if (alphabet === "a") {
      countOfA = text.filter((item) => item === "a").length;
    } else if (alphabet === "e") {
      countOfE = text.filter((item) => item === "e").length;
    } else if (alphabet === "i") {
      countOfI = text.filter((item) => item === "i").length;
    } else if (alphabet === "o") {
      countOfO = text.filter((item) => item === "u").length;
    } else if (alphabet === "u") {
      countOfU = text.filter((item) => item === "u").length;
    } else {
      console.log("Pasa");
    }
  });

  vowelCounter = countOfA + countOfE + countOfI + countOfO + countOfU;
  console.log(vowelCounter);
});
