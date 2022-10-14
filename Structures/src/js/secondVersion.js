// Skapa en variabel som innehåller talet som skall gissas.
// Just nu är talet 0, men det kommer snart att ändras.
let numberToGuess = 0;

function saveGivenNumber() {
  // Denna kod kommer att köras när användaren klicka på Spara (den nedre)

  // Fånga värdet i textrutan med id givenNumberFirst och gör om detta till ett tal.
  // Spara talet i variabeln numberToGuessFirst, vår variabel från här ovanifrån. Nu
  // har den variabeln fått rätt värde!
  numberToGuess = Number(document.getElementById("givenNumber").value);

  // En lite annorlunda lösning istället för att ta bort värdet ur vår input
  // är att gömma behållaren med vår <input> och <button>.
  document.getElementById("givenNumberContainer").className = "invisible";

  // Samtidigt som vi gömmer behållaren ovan tar vi fram behållaren gameContainer
  document.getElementById("gameContainer").className = "visible";
}

function playGame() {
  // Denna kod kommer köras när användaren klickar på Spela

  // Skapa en variabel som har ett värde som inte kan vara det inskrivna värdet
  let guess = 0;

  // Skapa en variabel som håller reda på hur många gissningar som användaren har gjort
  let numberOfGuesses = 0;

  // loopa så länge gissningen inte är lika med det inskrivna talet
  while (numberToGuess !== guess) {
    // Be användaren gissa och gör om gissningen till ett tal.
    // Lagra gissningen i variabeln guess (som skapades här ovanför)
    guess = Number(prompt("Gissa talet: "));

    // Om gissningen var för låg...
    if (guess < numberToGuess) {
      alert("Du gissade för lågt, prova igen");
    }

    // Om gissningen var för hög...
    if (guess > numberToGuess) {
      alert("Du gissade för högt, prova igen");
    }

    // Varje varv i loopen kommer vi addera 1 till antalet gissningar
    numberOfGuesses++;
  }

  // Om vi kommer hit har användaren brutit loopen och därmed gissat rätt.
  alert("Grattis, du gissade rätt! Det tog " + numberOfGuesses + " gissningar");
}
