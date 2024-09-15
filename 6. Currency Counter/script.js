const resetBtn = document.querySelector(".resetBtn");
const currencyInFigure = document.querySelector(".currencyInFigure");
const currencyInWords = document.querySelector(".currencyInWords");

const currencyNotes = [
  {
    element: document.querySelector("#thousand"),
    multiplier: 1000,
    display: document.querySelector(".thousandNumber"),
  },
  {
    element: document.querySelector("#fivehundred"),
    multiplier: 500,
    display: document.querySelector(".fivehundredNumber"),
  },
  {
    element: document.querySelector("#hundred"),
    multiplier: 100,
    display: document.querySelector(".hundredNumber"),
  },
  {
    element: document.querySelector("#fifty"),
    multiplier: 50,
    display: document.querySelector(".fiftyNumber"),
  },
  {
    element: document.querySelector("#twentyfive"),
    multiplier: 25,
    display: document.querySelector(".twentyfiveNumber"),
  },
  {
    element: document.querySelector("#twenty"),
    multiplier: 20,
    display: document.querySelector(".twentyNumber"),
  },
  {
    element: document.querySelector("#ten"),
    multiplier: 10,
    display: document.querySelector(".tenNumber"),
  },
  {
    element: document.querySelector("#five"),
    multiplier: 5,
    display: document.querySelector(".fiveNumber"),
  },
  {
    element: document.querySelector("#two"),
    multiplier: 2,
    display: document.querySelector(".twoNumber"),
  },
  {
    element: document.querySelector("#one"),
    multiplier: 1,
    display: document.querySelector(".oneNumber"),
  },
];

let totalCash = 0;

const updateTotalCash = () => {
  totalCash = currencyNotes.reduce((sum, notes) => {
    const value = notes.element.value
      ? parseInt(notes.element.value) * notes.multiplier
      : 0;
    notes.display.textContent = value;
    return sum + value;
  }, 0);

  currencyInFigure.textContent = `NRs. ${totalCash}`;
  currencyInWords.textContent = `In words: ${numberToWords(totalCash)}`;
};

// Function to convert numbers to words
function numberToWords(num) {
  const belowTwenty = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const aboveThousand = ["", "thousand", "million", "billion"];

  if (num === 0) return "zero";

  const convertBelowThousand = (num) => {
    let word = "";
    if (num >= 100) {
      word += belowTwenty[Math.floor(num / 100)] + " hundred ";
      num %= 100;
    }
    if (num >= 20) {
      word += tens[Math.floor(num / 10)] + " ";
      num %= 10;
    }
    if (num > 0) {
      word += belowTwenty[num] + " ";
    }
    return word.trim();
  };

  let word = "";
  let index = 0;

  while (num > 0) {
    if (num % 1000 !== 0) {
      word =
        convertBelowThousand(num % 1000) +
        " " +
        aboveThousand[index] +
        " " +
        word;
    }
    num = Math.floor(num / 1000);
    index++;
  }

  return word.trim();
}

currencyNotes.forEach((notes) => {
  notes.element.addEventListener("input", updateTotalCash);
});

// Optional: Reset Button functionality
resetBtn.addEventListener("click", () => {
  currencyNotes.forEach((notes) => {
    notes.element.value = "";
    notes.display.textContent = 0;
  });

  totalCash = 0;
  currencyInFigure.textContent = `NRs. ${totalCash}`;
  currencyInWords.textContent = `In words: zero`;
});

// Initialize the cash value display on page load
updateTotalCash();
