class Car {
  constructor(color, speed) {
    this.color = color;
    this.speed = speed;
    this.odoMeter = 0;
  }

  drive(distanceDriven) {
    this.odoMeter += distanceDriven;
  }
}

let myCar = new Car("Blue", 300);
console.log("MIN - Från början: ", myCar.odoMeter);

let someOtherCar = new Car("Yellow", 100);
console.log("ANNAN - Från början: ", someOtherCar.odoMeter);

myCar.drive(20);
console.log("MIN - Efter körning: ", myCar.odoMeter);
console.log("ANNAN - Efter min början: ", someOtherCar.odoMeter);

myCar.drive(30);
console.log("MIN - Efter körning: ", myCar.odoMeter);
console.log("ANNAN - Efter min början: ", someOtherCar.odoMeter);

someOtherCar.drive(80);
console.log("MIN - Efter körning: ", myCar.odoMeter);
console.log("ANNAN - Efter sin början: ", someOtherCar.odoMeter);

localStorage.setItem("name", "Sebastian");

/*************************** */

let someText = localStorage.getItem("name");
console.log(someText);

let myCarAsString = JSON.stringify(myCar);
console.log(myCarAsString);

localStorage.setItem("mycar", myCarAsString);
let myCarFromLS = localStorage.getItem("mycar");
console.log(myCarFromLS);

let myCarAsObj = JSON.parse(myCarFromLS);
console.log(myCarAsObj);
console.log(myCarAsObj.color);

let newCar = new Car(myCarAsObj.color, myCarAsObj.speed);
newCar.odoMeter = myCarAsObj.odoMeter;

console.log(newCar);
