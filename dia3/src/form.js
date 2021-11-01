/* ## Exercício 1
Crie um arquivo `src/form.js`, e importe-o no `src/main.js`.
No `index.html`, crie um formulário com apenas um campo: um input de texto que irá receber o nome de uma pessoa.
No JS, você deverá manipular o valor desse input, fazendo com que, enquanto o valor está sendo digitado,
o primeiro caractere de cada palavra seja uma letra maiúscula, a menos que as palavra sejam "de", "da", "do" ou "dos".
Todas as outras letras devem ser minúsculas.

**Exemplo:**

Se for digitado no campo: `rubens de oliveira`, o que deverá ser exibido no campo é `Rubens de Oliveira`.

Se for digitado `rOMualdo ferrEira DoS sanTOS NetO`, o que deverá ser exibido no campo é `Romualdo Ferreira dos Santos Neto`
 */

const input = document.querySelector('[data-js="text"]');

//outra forma de fazer
/* function validator(input) {
  return input
    .replace(/\b\w/g, (reg) => reg.toUpperCase())
    .replace(/\B\w/g, (reg) => reg.toLowerCase())
    .replace(/\b(d[eao]s?)/gi, (reg) => reg.toLowerCase());
}

input.addEventListener("input", (e) => {
  e.target.value = validator(e.target.value);
}); */

const dontChange = ["da", "das", "de", "do", "dos"];

input.addEventListener("input", (e) => {
  const valueAsArray = e.target.value.split(" ");

  e.target.value = valueAsArray
    .map((word) => {
      return dontChange.includes(word.toLowerCase())
        ? word.toLowerCase()
        : capitalize(word);
    })
    .join(" ");
});

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/* ## Exercício 2

Via JavaScript, adicione ao formulário um `select` do tipo `multiple` com algumas cores para seleção.

Crie opções para, pelo menos, 5 cores diferentes.

Conforme as cores vão sendo selecionadas, você deverá adicionar elementos no HTML com as cores que foram selecionadas.
Esses elementos podem ser `div`s mesmo, de tamanho `100px x 100px`, uma ao lado da outra, ou como você quiser exibir.

Fique à vontade para estilizar como achar melhor: o que eu preciso que você faça é apenas exibir na tela, de forma visual,
todas as cores que foram selecionadas, enquanto elas estão sendo selecionadas.

Exemplo: se apenas uma cor for selecionada, um quadrado pintado com essa cor deve ser exibido na tela.
Se duas cores forem selecionadas, dois quadrados devem aparecer na tela, um com cada uma das cores selecionadas.
Se houver uma "desseleção", a cor que foi "desselecionada" deve ser removida da tela. */
const form = document.querySelector('[data-js="form"]');
const select = document.createElement("select");

const colors = ["red", "blue", "pink", "black", "tomato"];
const colorsContainer = document.createElement("div");
colorsContainer.style.display = "flex";

colors.forEach((color) => {
  const option = document.createElement("option");
  option.value = color;
  option.textContent = color;
  select.appendChild(option);
});

select.addEventListener("change", (e) => {
  colorsContainer.innerHTML = "";

  Array.from(e.target.selectedOptions).forEach((option) => {
    const div = createDivColor(option.value);
    colorsContainer.appendChild(div);
  });
});

function createDivColor(value) {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = value;
  return div;
}

select.setAttribute("multiple", "");
form.appendChild(select);
document.body.appendChild(colorsContainer);

/* OUTRA FORMA DE FAZER
const select = `
<select name="colors" multiple data-js="colors-select">
  <option value="red">red</option>
  <option value="black">black</option>
  <option value="blue">blue</option>
  <option value="pink">pink</option>
  <option value="tomato">tomato</option>
</select>
`;

form.insertAdjacentHTML("beforeend", select);

const selectValue = document.querySelector('[data-js="colors-select"]');
const divBase = document.createElement("div");
divBase.setAttribute("data-js", "divbase");
form.appendChild(divBase);

function createDivs(values) {
  clearDiv("");
  return values.map((el) =>
    divBase.insertAdjacentHTML(
      "beforeend",
      `<div style='width: 100px; height: 100px; background-color: ${el}'</div>`
    )
  );
}
function clearDiv(value) {
  return (divBase.innerHTML = value);
}

selectValue.addEventListener("change", (e) => {
  const values = [...e.target.selectedOptions].map((el) => el.value);
  createDivs(values);
}); */
