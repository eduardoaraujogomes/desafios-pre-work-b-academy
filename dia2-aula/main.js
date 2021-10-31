/* import "./style.css";

function render({ title, description }) {
  document.querySelector("#app").innerHTML = `
  <h1>Hello ${title}</h1>
  ${description ? `<p>${description}</p>` : ""}
`;
}

const link = document.querySelector('[data-js="link"]');
link.addEventListener("click", (e) => {
  e.preventDefault();
  render({ title: "Vite" });
});

render({ title: "Eduardo", description: "Descrição do meu app" });
 */

//HOF
/* const sum = (a) => (b) => a + b;

const plusOne = sum(1);
const plusTen = sum(10);

console.log(sum(1)(2));

console.log(plusOne(1));
console.log(plusTen(3)); */

/* const arr = [1, 2, 3, 4];

function map(array, fn) {
  const tempArray = [];
  for (let i = 0; i < array.length; i++) {
    tempArray.push(fn(array[i]));
  }
  return tempArray;
}

console.log(
  "map:",
  map(arr, (itemQueEstaSendoIterado) => {
    return [itemQueEstaSendoIterado];
  })
);
console.log(
  "map:",
  map(arr, (itemQueEstaSendoIterado) => {
    return { id: itemQueEstaSendoIterado };
  })
);

function filter(array, fn) {
  const tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      tempArray.push(array[i]);
    }
  }
  return tempArray;
}

console.log(
  "filter:",
  filter(arr, (item) => item > 2)
); */

// Imutabilidade

const person = {
  name: "Daciuk",
  age: 36,
  gender: "M",
};

const newPerson = {
  ...person,
  age: 37,
};
//não usar o push, pop, shift, unshift, reverse, splice, sort (pois modificar o array original)
//utilizar o concat + destructuring, filter, slice, map, reduce, para utilizar o sort e o reverse você tem que usar destructuring antes

console.log("person:", person);
console.log("newPerson:", newPerson);
console.log(person === newPerson);
