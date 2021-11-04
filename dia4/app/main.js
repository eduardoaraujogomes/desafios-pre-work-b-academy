import "./style.css";
function post(url, image, brand, year, plate, color) {
  return fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      image: image,
      brandModel: brand,
      year: year,
      plate: plate,
      color: color,
    }),
  }).then((response) => response.json());
}

function get(url) {
  fetch(url)
    .then((response) => response.json())
    .then((values) => {
      if (values.length) {
        values.forEach((element) => {
          createElementsTable(element);
        });
        deleteCars();
        return;
      }
      const title = document.createElement("h2");
      title.innerText = "Nenhum carro encontrado";
      return table.appendChild(title);
    });
}

function createElementsTable(element) {
  const elements = [
    { type: "image", value: element.image },
    { type: "text", value: element.brandModel },
    { type: "text", value: element.year },
    { type: "text", value: element.plate },
    { type: "color", value: element.color },
  ];

  const tr = document.createElement("tr");
  elements.forEach((element) => {
    const td = elementTypes[element.type](element.value);
    tr.appendChild(td);
  });
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Deletar";
  deleteButton.setAttribute("data-js", "delete");

  table.appendChild(tr).appendChild(deleteButton);
}

function deleteMethod(plate) {
  return fetch("http://localhost:3333/cars", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      plate: plate,
    }),
  }).then((res) => res.json());
}

get("http://localhost:3333/cars");

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

const message = (string) => {
  checkingNotification();
  const message = document.createElement("h3");
  message.setAttribute("data-js", "notification");
  message.textContent = string;
  form.appendChild(message);
};

const checkingNotification = () => {
  const checkingNotification = document.querySelector("[data-js=notification]");
  return !!checkingNotification ? form.removeChild(checkingNotification) : "";
};

const checkingDataResponse = (data) => {
  if (data.error) {
    form.reset();
    return message(data.message);
  }
  document.querySelector('[data-js="submit"]').disabled = true;
  message(data.message);
  setTimeout(() => {
    window.location.reload();
  }, 1000);
};

const validatingPlate = (plate) => {
  const regex = new RegExp("[A-Z]{3}-\\d{4}", "g");
  return plate.match(regex);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const getElement = getFormElement(e);
  const imageValue = getElement("image").value;
  const brandValue = getElement("brand-model").value;
  const yearValue = getElement("year").value;
  const plateValue = getElement("plate").value;
  const colorValue = getElement("color").value;

  if (!Boolean(validatingPlate(plateValue))) {
    return message("Placa inválida! Digite uma placa válida (Ex: ABC-1234).");
  }
  post(
    "http://localhost:3333/cars",
    imageValue,
    brandValue,
    yearValue,
    plateValue,
    colorValue
  ).then((data) => {
    checkingDataResponse(data);
  });
});

function deleteCars() {
  const allDeletesButtons = document.querySelectorAll("[data-js='delete']");

  allDeletesButtons.forEach((e) =>
    e.addEventListener("click", function () {
      /*       this.closest("tr").remove(); */
      const plateValue =
        this.previousElementSibling.previousElementSibling.innerText;
      deleteMethod(plateValue).then((e) => window.location.reload());
    })
  );
}
