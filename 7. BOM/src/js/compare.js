import { Car } from "./car";

let carsFromLS = localStorage.getItem("cars");

let cars = JSON.parse(carsFromLS);

console.log(cars);

let newCars = [];

for (let i = 0; i < cars.length; i++) {
  newCars.push(new Car(cars[i].color, cars[i].speed));
}

console.log(newCars);

/******* More elegant solution *******/
let mappedCars = cars.map((car) => {
  return new Car(car.color, car.speed);
});

console.log(mappedCars);
