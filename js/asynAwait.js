"use strict";
console.log("asyncAwait.js file was loaded");

const baseUrl = "123https://jsonplaceholder.typicode.com";

function getUsers() {
  return fetch(`${baseUrl}/users`)
    .then((resp) => {
      console.log("resp ===", resp);
      return resp.json();
    })
    .then((data) => {
      console.log("data ===", data);
      return data;
    })
    .catch((err) => console.warn(err));
}
// async ir await
async function getUsersA() {
  try {
    const resp = await fetch(`${baseUrl}/users`);
    const data = await resp.json();
    console.log("data ===", data);
    return data;
  } catch (error) {
    console.warn("getUsersA klaida", error);
  }
}
// let rez = getUsersA();
// console.log('rez ===', rez); // promise

// getUsersA().then((rez) => console.log(rez));
getUsersA().then((rez) => console.log(rez));
