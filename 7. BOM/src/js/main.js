import { Car } from "./car";

document.getElementById("goBack").addEventListener("click", goBack);
document.getElementById("goForward").addEventListener("click", goForward);
document.getElementById("stopPing").addEventListener("click", stopPing);
document
  .getElementById("stopGettingPositions")
  .addEventListener("click", stopGettingPositions);

function goBack() {
  history.back();
}

function goForward() {
  history.forward();
}

setTimeout(() => {
  console.log("Delayed log");
}, 3000);

let stopWatch = 0;
let someRandomNumber = setInterval(() => {
  console.log("ping");
  stopWatch++;

  document.getElementById("stopwatch").innerHTML = stopWatch;
}, 1000);

console.log(someRandomNumber);

function stopPing() {
  clearInterval(someRandomNumber);
}

/***************************/
let watch = 0;
if (navigator.geolocation) {
  watch = navigator.geolocation.watchPosition(success, error);
} else {
  alert("Din webbläsare är för gammal för denna moderna sida");
}

function success(position) {
  console.log("Lat:", position.coords.latitude);
  console.log("Lng:", position.coords.longitude);
}

function error(message) {
  console.log(message.message);
}

function stopGettingPositions() {
  navigator.geolocation.clearWatch(watch);
}

/***************************/

let cars = [new Car("blue", 300), new Car("yellow", 100), new Car("red", 400)];
let clickedCars = [];

for (let i = 0; i < cars.length; i++) {
  let carContainer = document.createElement("div");
  let header = document.createElement("h3");

  carContainer.classList.add("clickable");
  carContainer.addEventListener("click", () => {
    handleClick(cars[i]);
  });
  header.innerHTML = cars[i].color;

  carContainer.appendChild(header);

  document.body.appendChild(carContainer);
}

function handleClick(car) {
  console.log("You clicked on", car);

  clickedCars.push(car);

  localStorage.setItem("cars", JSON.stringify(clickedCars));
}
