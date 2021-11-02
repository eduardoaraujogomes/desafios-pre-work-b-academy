// //a Promise você pode usar tanto com códigos sincronos, como com assincronos
// /* console.log(1); */
// const promise = new Promise((resolve) => {
//   console.log("promise 1 criada...");
//   setTimeout(() => {
//     resolve({ a: 1 });
//   }, 1000);
// });
// // console.log(2);
// // const promise2 = new Promise((resolve) => {
// //   console.log("promise 2 criada...");
// //   setTimeout(() => {
// //     resolve({ b: 2 });
// //   }, 1000);
// // });

// //sempre que você quiser pegar o valor que está dentro de uma Promise você pode usar um then, é igual ao map que retorna um array e você pode usar outros métodos de array logo em seguida
// /* promise.then((valorResolvido) => {
//   console.log("valor da promise:", valorResolvido.a);
// });
//  */
// //callback hell = código hadouken
// // promise.then(() => {
// //   console.log("promise 1 resolveu");
// //   promise2.then((result) => {
// //     console.log("promise2:", result);
// //   });
// // });

// //forma limpa de escrever
// /* promise
//   .then(() => promise2)
//   .then((resultadopromise2) => console.log(resultadopromise2)); */

// async function asyncFunction() {
//   return 1;
// }

// const asyncFunction2 = async () => {
//   const result = await asyncFunction();
//   console.log("result", result);
// };

// asyncFunction2();

// // essa sintaxe de cima é igual a de baixa

// // const asyncFunction2 = () => {
// //   return new Promise((resolve) => resolve(2))
// // };

// // asyncFunction2().then((result) => console.log("result", result));

// fetch("http://localhost:3333")
//   .then((result) => result.ok &&  result.json())
//   .then((result) => console.log(result));

fetch("http://localhost:3333/car", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify({
    image: "imagem.jpg",
    brandModel: "brand model",
    year: 2020,
    plate: "abc-1234",
    color: "Red",
  }),
})
  .then(() => {
    fetch(url)
      .then((result) => result.ok && result.json())
      .then((result) => console.log(result));
  })
  .catch((err) => console.log("qual erro?", err));
