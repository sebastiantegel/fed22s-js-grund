import { Car } from "./car";
import { Doll } from "./doll";

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

// Skapa listan med dockor
let dolls = [
  new Doll("blonde", 20, 1953),
  new Doll("brown", 20, 1960),
  new Doll("orange", 17, 1990),
];

// Funktion som skall köras varje gång en användare klickar på en docka
// parametern doll är det objekt som användaren klickade på
const handleDollClick = (doll) => {
  console.log("Du klickade på", doll);

  // Hitta vår section som skall visa detaljinformation
  let informationSection = document.getElementById("dollDetails");

  // Töm vår sektion på eventuellt gammal information
  informationSection.innerHTML = "";

  // Skapa <p></p>
  let hairColor = document.createElement("p");
  let age = document.createElement("p");
  let year = document.createElement("p");

  // Ändra innehållet i våra <p></p>
  hairColor.innerHTML = doll.hairColor;
  age.innerHTML = doll.age;
  year.innerHTML = doll.year;

  // Lägg till <p></p> till vår section så att de syns
  informationSection.appendChild(hairColor);
  informationSection.appendChild(age);
  informationSection.appendChild(year);
};

// Loopa igenom dockorna för att presentera dem på skärmen
for (let i = 0; i < dolls.length; i++) {
  // Skapa en <div></div>
  let doll = document.createElement("div");

  // Ändra <div></div> så att en egenskap från objekten syns
  doll.innerHTML = dolls[i].hairColor;

  // Här! Lyssna efter click på våra div-element. När klicket inträffar, kör
  // den anonyma funktionen. I denna anonyma funktion, anropa handleDollClick
  // och skicka det objekt som vi just nu höll på att loopa igenom. Detta gör
  // att rätt objekt skickas till funktionen.
  doll.addEventListener("click", () => {
    handleDollClick(dolls[i]);
  });

  // Lägg till <div></div> så att de syns
  document.body.appendChild(doll);
}
