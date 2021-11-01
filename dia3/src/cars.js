/* ## Exercício 3

Vamos agora criar um formulário para fazer um cadastro de carros.

Crie um novo arquivo, `src/cars.js`, e importe-o no `src/main.js`.
No HTML, crie um novo formulário, e adicione os seguintes campos para cadastro de um carro:

Imagem (URL), Marca / Modelo, Ano, Placa, Cor e um botão para enviar o formulário.

Crie também uma tabela no HTML que irá receber os dados dos carros criados.
Ao preencher todos os dados e submeter o formulário, você deve criar uma nova linha na tabela
com os dados do carro criado, limpar o formulário para receber um novo cadastro, e dar foco no primeiro campo
do formulário (campo imagem). */

const form = document.querySelector('[data-js="cars-form"]');
const table = document.querySelector('[data-js="table"]');

const getFormElement = (event) => (elementName) => {
  return event.target.elements[elementName];
};

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor,
};

function createImage(value) {
  const td = document.createElement("td");
  const img = document.createElement("img");
  img.src = value;
  img.width = 100;
  td.appendChild(img);
  return td;
}

function createText(value) {
  const td = document.createElement("td");
  td.textContent = value;
  return td;
}

function createColor(value) {
  const td = document.createElement("td");
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = value;
  td.appendChild(div);
  return td;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const getElement = getFormElement(e);

  const elements = [
    { type: "image", value: getElement("image").value },
    { type: "text", value: getElement("brand-model").value },
    { type: "text", value: getElement("year").value },
    { type: "text", value: getElement("plate").value },
    { type: "color", value: getElement("color").value },
  ];

  const tr = document.createElement("tr");
  elements.forEach((element) => {
    const td = elementTypes[element.type](element.value);
    tr.appendChild(td);
  });

  table.appendChild(tr);

  e.target.reset();
  image.focus();
});
