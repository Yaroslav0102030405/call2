const display = document.querySelector(".display");
const buttons = Array.from(document.querySelectorAll(".button"));

// const buttons = document.querySelectorAll(".button");

// const calculator = document.querySelector(".calculator");

// buttons.addEventListener("click", onClick);

// function onClick(e) {
//   switch (e.target.innerText) {
//     case "AC":
//       display.innerText = "0";
//       break;
//     case "=":
//       try {
//         display.innerText = eval(display.innerText);
//       } catch (e) {
//         display.innerText = "Eror!";
//       }
//       break;
//     case "+/-":
//       display.innerText = "-";
//       break;
//     case "%":
//       // let passedText = display.innerText + "/100";
//       display.innerText = eval(display.innerText + "/100");
//       break;
//     default:
//       if (display.innerText === "0" && e.target.innerText !== ".") {
//         display.innerText = e.target.innerText;
//       } else {
//         display.innerText += e.target.innerText;
//       }
//   }
// }

//

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    // console.log(e.target);

    switch (e.target.innerText) {
      case "AC":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Eror!";
        }
        break;
      case "+/-":
        display.innerText = "-";
        break;
      case "%":
        let passedText = display.innerText + "/100";
        display.innerText = eval(passedText);
        break;
      default:
        if (display.innerText === "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
