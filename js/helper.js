"use strict";
console.log("helper.js file was loaded");

// generic pagalbine funkcija kuri parsius duomenis ir grazins

function getData(url) {
  return fetch(url)
    .then((resp) => {
      if (resp.ok === false) {
        throw new Error(`Klaida: ${resp.statusText} code: ${resp.status}`);
      }
      return resp.json();
    })
    .then((data) => {
      // console.log("getData got data ===", data);
      return data;
    })
    .catch((error) => {
      console.warn(error);
    });
}
// let rez = getData("https://jsonplaceholder.typicode.com/todos").then(
//   (todoArr) => {
//     console.log("todo 10", todoArr.slice(0, 10));
//   }
// );
// console.log("rez ===", rez);
