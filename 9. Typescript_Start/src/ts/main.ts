import { IMovie } from "./models/IMovie";
import { Person } from "./models/Person";
let x: number = 17;

x = 4711;

let firstname: string = "Sebastian";
firstname = "Hanna";

// firstname = 4711;
// firstname = x.toString();

let numbers: number[] = [1, 1, 2, 3, 5, 8];

for (let i: number = 0; i < numbers.length; i++) {
  console.log(i);
}

let p = new Person("Sebastian", 43);

console.log(p);

let movie: IMovie = { Title: "LOTR", Year: 2000, Poster: "" };

console.log(movie);
