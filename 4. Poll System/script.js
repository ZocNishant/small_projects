const vote = () => {
  // Button Selection
  const jsBtn = document.querySelector(".javascript");
  const pyBtn = document.querySelector(".python");
  const cppBtn = document.querySelector(".cplus");
  const javaBtn = document.querySelector(".java");

  const startVoteBtn = document.querySelector(".castVote");

  // Button Array
  const btnArr = [jsBtn, pyBtn, cppBtn, javaBtn];

  // % span selection
  const jsPercent = document.querySelector("#jsPercent");
  const pyPercent = document.querySelector("#pyPercent");
  const cppPercent = document.querySelector("#cppPercent");
  const javaPercent = document.querySelector("#javaPercent");

  // inital vote count
  let jsVoteCount = 0;
  let pyVoteCount = 0;
  let cppVoteCount = 0;
  let javaVoteCount = 0;

  btnArr.forEach((item) => {
    item.addEventListener("click", function () {
      item === jsBtn ? jsVoteCount++ : jsVoteCount;
      item === pyBtn ? pyVoteCount++ : pyVoteCount;
      item === cppBtn ? cppVoteCount++ : cppVoteCount;
      item === javaBtn ? javaVoteCount++ : javaVoteCount;
    });
  });

  startVoteBtn.addEventListener("click", function () {
    jsPercent.textContent = `${jsVoteCount} %`;
    pyPercent.textContent = `${pyVoteCount} %`;
    cppPercent.textContent = `${cppVoteCount} %`;
    javaPercent.textContent = `${javaVoteCount} %`;
  });
};

vote();
