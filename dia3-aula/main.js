import "./style.css";

// const app = document.querySelector("[data-js='app']");

/* app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
 */
/* const img = '<img src="x"/>';

//beforebegin antes do app
//afterend depois do fim de app

//afterbegin depois do começo de app
//beforeend antes do fim de app

//element.outerHTML retorna uma string dos elementos
app.insertAdjacentHTML("beforeend", img); // transforma em objeto
 */

/* const div = document.createElement("div");
const img = document.createElement("img");

div.setAttribute("data-arroz", "minha-div");
console.log("div:", div.dataset.arroz);
div.appendChild(img);

app.appendChild(div);

app.replaceChild(document.createElement("section"), div); */

const form = document.querySelector('[data-js="form"]');
const inputName = document.querySelector('[data-js="name"]');
const textarea = document.querySelector('[data-js="textarea"]');
const checkboxes = document.querySelectorAll('[data-js="lang"]');
const radios = document.querySelectorAll('[data-js="gender"]');

const langSelect = document.querySelector('[data-js="lang-select"]');
const genderSelect = document.querySelector('[data-js="gender-select"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("e.target:", e.target.elements.username);

  const dadosParaApi = {
    name: e.target.elements.username.value,
    email: e.target.elements.email.value,
    lang: Array.from(e.target.elements["lang-select"].selectedOptions).map(
      (el) => el.value
    ),
  };
  console.log(JSON.stringify(dadosParaApi));
});
/*
inputName.addEventListener("input", (e) => {
  console.log("e.target.value:", e.target.value);
});

textarea.addEventListener("input", (e) => {
  console.log("e.target.value:", e.target.value);
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    console.log("value:", e.target.value);
    console.log("checked:", e.target.checked);
  });
});

radios.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    console.log("value:", e.target.value);
    console.log("checked:", e.target.checked);
  });
});

langSelect.addEventListener("change", (e) => {
  console.log([...e.target.selectedOptions].map((el) => el.value));
    console.log(
    "e.target.value:",
    [...e.target.options].map((el) => ({
      value: el.value,
      selected: el.selected,
    })) // TÉCNICA NINJA! transforma em array e passa um map para conseguir pegar os valores selecionados
  );
});

genderSelect.addEventListener("change", (e) => {
  console.log("e.target.value", e.target.value);
});
*/
