import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";

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
