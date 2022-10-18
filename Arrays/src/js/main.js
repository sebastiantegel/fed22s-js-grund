let firstname = "Sebastian Tegel";

console.log("Längden av Sebastian:", firstname.length);

console.log(firstname[0]); // "S"
console.log(firstname[4]); // "s"

console.log(firstname[15]); // Undefined

// firstname[8] = "T";

for (let i = 0; i < firstname.length; i++) {
  console.log(firstname[i]);
}

let someString = ["S", "e", "b", "a", "s", "t", "i", "a", "n"];

let numbers = [1, 1, 2, 3, 5, 8, 13];

// Summering av värden i lista
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log("Summa:", sum);

// Sökning efter värde i lista
function searchNumber(searchFor) {
  let found = false;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === searchFor) {
      found = true;
    }
  }

  return found;
}

//let foundNumber = searchNumber(1);

//console.log("Hittade talet 1:", foundNumber);

// Hitta sökknappen
let searchButton = document.getElementById("search");

// Lyssna efter händelsen click och om klicket inträffar, kör funktionen search
searchButton.addEventListener("click", search);

function search() {
  // Leta efter <input> och ta fram texten i den och gör om till number
  let numberFromUser = +document.getElementById("userInput").value;

  // Sök efter talet i textrutan i vår lista, lagra resultatet i varibeln found
  let found = searchNumber(numberFromUser);

  // Hitta <h1></h1>
  let resultTag = document.getElementById("result");

  if (found) {
    // Om found === true, ändra texten i <h1>
    resultTag.innerHTML = "Talet finns i listan";
  } else {
    // Annars (om found === false), sätt en annan text i <h1>
    resultTag.innerHTML = "Nope, försök igen";
  }
}

numbers.pop();
numbers.push(13);
numbers.splice(4, 1);

let longText = "lorem ipsum dolor sit amet";
let wordsFromText = longText.split(" ");
wordsFromText.splice(1, 1);
console.log(wordsFromText);
