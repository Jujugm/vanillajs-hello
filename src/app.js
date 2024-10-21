/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["Mi perra Loki", "Mi abuela", "Un pangolino salvaje", "Mi hermano"];
let action = ["se comió", "se hizo pipí", "chocó", "rompió"];
let what = ["en mis deberes", "mi vida", "en el coche"];
let when = [
  "en el Gofre.",
  "mientras dormía.",
  "mientras hacía ejercicio.",
  "mientras rezaba.",
  "el otro día."
];
function getRandomNumber(max, min) {
  console.log(min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom(anyArray) {
  let max = who.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML =
    getRandom(who) +
    " " +
    getRandom(action) +
    " " +
    getRandom(what) +
    " " +
    getRandom(when);
};
