const btns = document.querySelectorAll("button");

btns.forEach((item) => {
  item.addEventListener("click", function () {
    console.log("Pasa");
  });
});
