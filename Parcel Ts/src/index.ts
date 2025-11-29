const buttonElem = document.querySelector(".clickMe") as HTMLButtonElement;
const bodyElem: HTMLElement = document.body;
let isWhite: boolean = false;

buttonElem.addEventListener("click", () => {
  console.log("I am Clicked");

  if (isWhite) {
    bodyElem.style.backgroundColor = "#ffff";
  } else {
    bodyElem.style.backgroundColor = "#a6b694ff";
  }

  isWhite = !isWhite;
});
