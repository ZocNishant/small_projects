const vowelCheckerFn = () => {
  const textBox = document.querySelector("#text");
  const countBtn = document.querySelector("#countBtn");

  let vowelCounter;

  countBtn.addEventListener("click", function () {
    const text = textBox.value.toLowerCase().split("");

    let countOfA = 0;
    let countOfE = 0;
    let countOfI = 0;
    let countOfO = 0;
    let countOfU = 0;

    text.forEach((alphabet) => {
      if (alphabet === "a") {
        countOfA++;
      } else if (alphabet === "e") {
        countOfE++;
      } else if (alphabet === "i") {
        countOfI++;
      } else if (alphabet === "o") {
        countOfO++;
      } else if (alphabet === "u") {
        countOfU++;
      }
    });

    const vowelCounter = countOfA + countOfE + countOfI + countOfO + countOfU;
    document.querySelector(
      ".showResult"
    ).textContent = `Result: ${vowelCounter}`;

    clearTxtArea();
  });
};

const clearTxtArea = () => {
  const textBox = document.querySelector("#text");
  textBox.value = "";
};
