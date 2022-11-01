import axios from "axios";

console.log("Start");

// Skapa ett "dumt" promise-objekt som vi kan testa saker med
let promise = new Promise((resolve, reject) => {
  // Kör lite kod efter 3 sekunder
  setTimeout(() => {
    resolve("HURRA!");
  }, 3000);
});

console.log("In between");

// function success(data) {
//   console.log(data);
// }

// function error(message) {}

// Koppla ihop vad funktionerna resolve och reject i vårt löfte skall vara
// Den första funktionen är resolve, den andra är reject
promise.then(
  (data) => {
    console.log(data);
  },
  () => {}
);

console.log("End");

// fetch("http://omdbapi.com?apikey=416ed51a&s=star")
//   .then((response) => response.json())
//   .then((data) => {
//     handleData(data);
//   });

axios.get("http://omdbapi.com?apikey=416ed51a&s=star").then((response) => {
  handleData(response.data);
});

// Skapa html :)
function handleData(data) {
  console.log(data.Search);

  for (let i = 0; i < data.Search.length; i++) {
    console.log(data.Search[i]);

    let container = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");

    title.innerHTML = data.Search[i].Title;
    img.src = data.Search[i].Poster;
    img.alt = data.Search[i].Title;

    container.classList.add("movie");

    container.appendChild(title);
    container.appendChild(img);

    document.body.appendChild(container);
  }
}
