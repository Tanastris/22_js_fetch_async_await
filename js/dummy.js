"use strict";
console.log("dummy.js file was loaded");

// taikomes
const els = {
  postUl: document.querySelector("#posts"),
};

// parsisiusti postus is 'https://dummyjson.com/posts'

//parsisiusti paprastai
function getEasyPosts() {
  fetch("https://dummyjson.com/posts?limit=0")
    .then((resp) => resp.json())
    .then((postsArr) => console.log(postsArr.posts))
    .catch((error) => {
      console.log(error);
    });
}
// parsisiusti su asyn ir await
// parsisiusti su pagalbine fn getData

// iskonsolinti sitame faile visus post

async function consolePosts() {
  const postArr = await getData("https://dummyjson.com/posts?limit=0");
  // console.log(postArr.posts);
  generatePostHtml(postArr.posts);
}
consolePosts();
// getEasyPosts();

function generatePostHtml(postsArr) {
  postsArr.forEach((postObj) => {
    createAndAddPost(postObj);
  });
}

/*
<div class="col-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Special title treatment</h5>
            <p class="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <p class="fw-bold">likes</p>
          </div>
          <div class="card-footer text-body-secondary">
            Tags:
            <span class="badge rounded-pill text-bg-secondary">Secondary</span>
          </div>
        </div>
      </div> */

function tagsToHtml(tagsArr) {
  let htmlStr = "";
  tagsArr.forEach((tagText) => {
    htmlStr += `<span class="badge rounded-pill text-bg-secondary">${tagText}</span>`;
    // console.log("htmlStr ===", htmlStr);
  });
  return htmlStr;
}

function createAndAddPost(pObj) {
  // sukurti ir patalpinti i html 1 elementa
  // sukuriam isorini div
  const divEl = document.createElement("div");
  divEl.classList.add("col-6", "mb-4");
  // sukuriam vidini
  divEl.innerHTML = `<div class="card">
  <div class="card-body">
    <h5 class="card-title">${pObj.title}</h5>
    <p class="card-text">
    ${pObj.body.slice(0, 100)}...
    </p>
    <p class="fw-bold">${pObj.reactions}</p>
  </div>
  <div class="card-footer text-body-secondary">
    Tags:
    ${tagsToHtml(pObj.tags)}
  </div>
</div>`;
  // patalpinti
  els.postUl.append(divEl);
}
