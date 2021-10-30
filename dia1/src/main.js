import "./style.css";

const app = document.querySelector('[data-js="app"]');

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;

document.querySelector('[data-js="link"]').addEventListener("click", (e) => {
  e.preventDefault();
  app.classList.toggle("hide");
  e.target.textContent =
    e.target.textContent === "Esconder" ? "Exibir" : "Esconder";
});
