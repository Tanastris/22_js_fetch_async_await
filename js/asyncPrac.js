"use strict";
console.log("asyncPrac.js file was loaded");

const baseUrl = "https://jsonplaceholder.typicode.com";

// su atskirom funkcijom parsiusti naudojant async await
// todos - pirmus 10
// posts - pirmus 15
// comments - pirmus 7
let masyvas = [];
async function getTodos() {
  try {
    const resp = await fetch(`${baseUrl}/todos`);
    const data = await resp.json();
    const slicedData = data.slice(0, 10);
    console.log(slicedData);
    masyvas.push(...slicedData);
  } catch (error) {
    console.log(error);
  }
}
async function getPosts() {
  try {
    const resp = await fetch(`${baseUrl}/posts`);
    const data = await resp.json();
    const slicedData = data.slice(0, 15);
    console.log(slicedData);
    masyvas.push(...slicedData);
  } catch (error) {
    console.log(error);
  }
}
async function getComments() {
  try {
    const resp = await fetch(`${baseUrl}/comments`);
    const data = await resp.json();
    const slicedData = data.slice(0, 7);
    console.log(slicedData);
    masyvas.push(...slicedData);
  } catch (error) {
    console.log(error);
  }
}
async function init() {
  await getData(`${baseUrl}/todos`);
  await getData(`${baseUrl}/posts`);
  await getData(`${baseUrl}/comments`);
  // perdaryti pagrindines funkcijas. iskelti push i cia

  console.log(masyvas);
}
init();
