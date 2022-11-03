import axios from "axios";
import { OmdbResponse } from "./models/omdbresponse";

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

fetch("http://omdbapi.com?apikey=416ed51a&s=star")
  .then((response) => response.json())
  .then((data) => {
    let result = new OmdbResponse(data.totalResults, data.Search);
    console.log("Result:", result);

    handleData(result.movies);
  });

// axios.get("http://omdbapi.com?apikey=416ed51a&s=star").then((response) => {
//   handleData(response.data);
// });

// Skapa html :)
function handleData(movies) {
  // console.log(movies);

  for (let i = 0; i < movies.length; i++) {
    // console.log(movies[i]);

    let container = document.createElement("div");
    let title = document.createElement("h3");
    let img = document.createElement("img");

    title.innerHTML = movies[i].title;
    img.src = movies[i].imageUrl;
    img.alt = movies[i].title;

    container.classList.add("movie");

    container.appendChild(title);
    container.appendChild(img);

    document.body.appendChild(container);
  }
}
