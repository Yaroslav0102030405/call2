const display = document.querySelector(".display");
// const buttons = document.querySelectorAll(".button");
const buttons = Array.from(document.querySelectorAll(".button"));

// const canculator = document.querySelector(".calculator");
// const ac = document.querySelector(".ac");
// const plusEquals = document.querySelector(".plus-equals");
// const percent = document.querySelector(".percent");
// const multiply = document.querySelector(".multiply");
// const plus = document.querySelector("plus");

// canculator.addEventListener("click", onClick);

// function onClick(e) {
//   if (e.target === ac) {
//     display.innerText = "0";
//   } else if (e.target === plusEquals) {
//     display.innerText = "-";
//   } else if (e.target === percent) {
//     let passedText = display.innerText + "/100";
//     display.innerText = eval(passedText);
//   } else if (e.target === multiply) {
//     display.innerText * e.target.innerText;
//   } else if (e.target === plus) {
//     display.innerText += e.target.innerText;
//   } else if (display.innerText === "0" && e.target.innerText !== ".") {
//     display.innerText = e.target.innerText;
//   }
// }

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    // console.log(e.target);

    switch (e.target.textContent) {
      case "AC":
        display.textContent = "0";
        break;
      case "=":
        try {
          display.textContent = eval(display.textContent);
        } catch (e) {
          display.textContent = "Eror!";
        }
        break;
      case "+/-":
        display.textContent = "-";
        break;
      case "%":
        let passedText = display.textContent + "/100";
        display.textContent = eval(passedText);
        break;
      default:
        if (display.textContent === "0" && e.target.textContent !== ".") {
          display.textContent = e.target.textContent;
        } else {
          display.textContent += e.target.textContent;
        }
    }
  });
});
