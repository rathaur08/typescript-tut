const buttonElem = document.querySelector(".clickMe");
const bodyElem = document.body;
let isWhite = false;
buttonElem.addEventListener("click", ()=>{
    console.log("I am Clicked");
    if (isWhite) bodyElem.style.backgroundColor = "#ffff";
    else bodyElem.style.backgroundColor = "#a6b694ff";
    isWhite = !isWhite;
});

//# sourceMappingURL=Parcel Ts.377278e2.js.map
