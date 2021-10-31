import "./style.css";

const app = document.querySelector("[data-js='app']");
const link = document.querySelector("[data-js='link']");
const button = document.querySelector("[data-js='button']");

link.addEventListener("click", (e) => {
  e.preventDefault();
  alert("link");
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  alert("button");
});
