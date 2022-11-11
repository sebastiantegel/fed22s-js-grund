import { IPerson } from "./IPerson";
export interface ISwapiSearchResponse {
  count: number;
  next: string;
  previous: string;
  results: IPerson[];
}
