import { IMovie } from "./../../../../10. Typescript/src/ts/models/IMovie";
import { IOmdbResponse } from "./../../../../10. Typescript/src/ts/models/IOmdbResponse";
import axios from "axios";

// export function searchMovies(): Promise<IMovie[]> {
//   return axios
//     .get<IOmdbResponse>("http://omdbapi.com?apikey=416ed51a&s=star")
//     .then((response) => {
//       return response.data.Search;
//     });
// }

export async function searchMovies(searchText: string): Promise<IMovie[]> {
  let response = await axios.get<IOmdbResponse>(
    `http://omdbapi.com?s=${searchText}&apikey=416ed51a`
  );
  return response.data.Search;
}
