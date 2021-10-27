const form = document.querySelector("form");
const ulList = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("submitted");

  const productInput = form.elements.product;
  const quantityInput = form.elements.qty;
  console.log(productInput.value, quantityInput.value);
  addItems(quantityInput.value, productInput.value);

  productInput.value = "";
  quantityInput.value = "";
});

const addItems = (qt, product) => {
  const newLi = document.createElement("li");
  const items = `${qt} ${product}`;
  newLi.innerText = `${items}`;
  ulList.appendChild(newLi);
};

// console.log("connected");

// const tweetForm = document.querySelector("#tweetForm");
// const tweetsContainer = document.querySelector("#tweets");

// tweetForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const usernameInput = tweetForm.elements.username;
//   const tweetInput = tweetForm.elements.tweet;

//   addTweet(usernameInput.value,tweetInput.value)
//   usernameInput.value = '';
//   tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//   const newTweet = document.createElement("li");
//   const bTag = document.createElement("b");

//   bTag.append(username);
//   newTweet.append(bTag);
//   newTweet.append(`- ${tweet}`);

//   tweetsContainer.append(newTweet);
// };

// const tweetForm = document.querySelector('#tweetForm');
// const tweetsContainer = document.querySelector('#tweets');
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // const usernameInput = document.querySelectorAll('input')[0];
//     // const tweetInput = document.querySelectorAll('input')[1];
//     const usernameInput = tweetForm.elements.username;
//     const tweetInput = tweetForm.elements.tweet;
//     addTweet(usernameInput.value, tweetInput.value)
//     usernameInput.value = '';
//     tweetInput.value = '';
// });

// const addTweet = (username, tweet) => {
//     const newTweet = document.createElement('li');
//     const bTag = document.createElement('b');
//     bTag.append(username)
//     newTweet.append(bTag);
//     newTweet.append(`- ${tweet}`)
//     tweetsContainer.append(newTweet);
// }
