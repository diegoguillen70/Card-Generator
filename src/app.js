/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let symbol = ["♠", "♣", "♥", "♦"];
  generateSymbol();
  let timer = setInterval(() => {
    generateSymbol();
  }, 10000);
  function generateSymbol() {
    let randomSymbol = Math.floor(Math.random() * 4);
    let randomNumber = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "J",
      "Q",
      "K"
    ];
    let spans = document.getElementsByTagName("span");
    spans[1].innerHTML = randomNumber[Math.floor(Math.random() * 12)];
    spans[0].innerHTML = symbol[randomSymbol];
    spans[2].innerHTML = symbol[randomSymbol];
    if (symbol[randomSymbol] == "♥" || symbol[randomSymbol] == "♦") {
      spans[0].className = "symbol-left-red";
      spans[2].className = "symbol-right-red";
      return;
    }
    spans[0].className = "symbol-left-black";
    spans[2].className = "symbol-right-black";
  }
  let buttons = document.getElementsByTagName("button");
  for (const element of buttons) {
    element.addEventListener("click", e => {
      if (e.target.className === "btn-generate") {
        generateSymbol();
        clearInterval(timer);
      }
      if (e.target.className === "btn-resize") {
        let setWidth = document.getElementById("input-width").value;
        let setHeight = document.getElementById("input-height").value;
        setWidth *= 10;
        setHeight *= 10;
        //less size w=350 h=350 max w=1000 h=1000
        if (
          setWidth != "" &&
          setHeight != "" &&
          setWidth >= 400 &&
          setHeight >= 400
        ) {
          let selectCard = document.getElementById("card");
          selectCard.style.width = `${setWidth}px`;
          selectCard.style.height = `${setHeight}px`;
        } else {
          alert("input size is not valid");
        }
      }
    });
  }
};
