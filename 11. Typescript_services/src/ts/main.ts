import { IMovie } from "./models/IMovie";
import { searchMovies } from "./services/movieService";

(document.getElementById("searchForm") as HTMLFormElement).addEventListener(
  "submit",
  async (event: SubmitEvent) => {
    event.preventDefault();

    let searchText: string = (
      document.getElementById("searchText") as HTMLInputElement
    ).value;

    let movies: IMovie[] = await searchMovies(searchText);

    movies = movies.sort((a: IMovie, b: IMovie) => {
      if (+a.Year > +b.Year) return 1;
      if (+a.Year < +b.Year) return -1;

      return 0;
    });

    createHtml(movies);
  }
);

const createHtml = (movies: IMovie[]) => {
  let container: HTMLDivElement = document.getElementById(
    "searchResult"
  ) as HTMLDivElement;
  container.innerHTML = "";
  for (let i = 0; i < movies.length; i++) {
    let title = document.createElement("h3");

    title.innerHTML = movies[i].Title;

    container.appendChild(title);
  }
};
