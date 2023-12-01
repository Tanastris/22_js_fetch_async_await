"use strict";
console.log("fetch.js file was loaded");
const url = "https://jsonplaceholder.typicode.com/todos";

/*{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  } 
      <button type="button" class="list-group-item list-group-item-action">
        A second button item
      </button>
*/

const els = {
  todosListEl: document.querySelector("#todos"),
};

let mainTodoArr = [];

function getTodos() {
  fetch(url)
    .then((resp) => resp.json())
    .then((todoArr) => {
      const todosToWorkWith = todoArr.slice(0, 6);
      console.table(todosToWorkWith);
      mainTodoArr = todosToWorkWith;
      printTodostoHtml(todosToWorkWith);
    })
    .catch(console.warn);
}
getTodos();

function printTodostoHtml(todoArr) {
  const htmlTodoElArr = todoArr.map((todoObj) => {
    const buttonEl = document.createElement("button");
    buttonEl.classList.add("list-group-item", "list-group-item-action");
    if (todoObj.completed === true) {
      buttonEl.classList.add("bg-success-subtle");
    }
    buttonEl.innerHTML = `${todoObj.id} <strong>${todoObj.title}</strong> done: ${todoObj.completed}`;
    console.log("buttonEl ===", buttonEl);
    return buttonEl;
  });
  els.todosListEl.append(...htmlTodoElArr);
}
