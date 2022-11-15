import { IMovie } from "./IMovie";

export interface IOmdbResponse {
  totalResults: string;
  Search: IMovie[];
}
