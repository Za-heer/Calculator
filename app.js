let buttons = document.querySelectorAll("button");
// let equallbtn =document.getElementById("equall");
let output = document.getElementById("output");
let val = Array.from(buttons);
// console.log(buttons)
val.map((buttons) => {
  buttons.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        output.innerText = "";
        break;
      case "C":
        if (output.innerText) {
          output.innerText = output.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          output.innerText = eval(output.innerText);
        } catch {
          output.innerText = "Error!";
        }
        break;
      default:
        output.innerText += e.target.innerText;
    }
  });
});
