/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateSymbol();
  setInterval(() => {
    generateSymbol();
  }, 3000);
};
let symbol = ["♠", "♣", "♥", "♦"];

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
