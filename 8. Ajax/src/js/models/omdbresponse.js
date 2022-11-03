import { Movie } from "./movie";

export class OmdbResponse {
  constructor(amount, movies) {
    this.amount = amount;
    this.movies = movies.map((movie) => {
      return new Movie(movie.Title, movie.Poster);
    });
  }
}
