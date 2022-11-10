import axios from "axios";
import { IMovie } from "./models/IMovie";
import { IMovieExtended } from "./models/IMovieExtended";
import { IOmdbResponse } from "./models/IOmdbResponse";

axios
  .get<IOmdbResponse>("http://omdbapi.com?apikey=416ed51a&s=star")
  .then((response) => {
    createHTML(response.data.Search);
  });

const createHTML = (movies: IMovie[]) => {
  for (let i = 0; i < movies.length; i++) {
    // console.log(movies[i].Title);

    let container: HTMLDivElement = document.createElement("div");
    let title: HTMLHeadingElement = document.createElement("h3");
    let img: HTMLImageElement = document.createElement("img");

    container.addEventListener("click", () => {
      handleClick(movies[i]);
    });
    container.setAttribute("data-bs-toggle", "modal");
    container.setAttribute("data-bs-target", "#exampleModal");
    title.innerHTML = movies[i].Title;
    img.src = movies[i].Poster;
    img.alt = movies[i].Title;

    container.appendChild(title);
    container.appendChild(img);

    document.body.appendChild(container);
  }
};

const handleClick = (movie: IMovie) => {
  console.log("Du klickade på", movie.imdbID);
  let modalBody: HTMLDivElement = document.getElementById(
    "modal-body"
  ) as HTMLDivElement;
  modalBody.innerHTML = "";

  axios
    .get<IMovieExtended>("http://omdbapi.com?apikey=416ed51a&i=" + movie.imdbID)
    .then((response) => {
      console.log(response.data);

      let modalTitle: HTMLHeadingElement = document.getElementById(
        "exampleModalLabel"
      ) as HTMLHeadingElement;

      let img: HTMLImageElement = document.createElement("img");
      let plot: HTMLParagraphElement = document.createElement("p");
      let release: HTMLParagraphElement = document.createElement("p");
      let director: HTMLHeadingElement = document.createElement("h4");

      img.src = response.data.Poster;
      plot.innerHTML = response.data.Plot;
      release.innerHTML = response.data.Released;
      director.innerHTML = response.data.Director;

      modalTitle.innerHTML = response.data.Title;

      modalBody.appendChild(img);
      modalBody.appendChild(director);
      modalBody.appendChild(release);
      modalBody.appendChild(plot);
    });
};
