// Skapa en variabel som innehåller talet som skall gissas.
// Just nu är talet 0, men det kommer snart att ändras.
let numberToGuessFirst = 0;

function saveFirstGivenNumber() {
  // Denna kod kommer köras när en användare klickar på knappen Spara

  // Fånga värdet i textrutan med id givenNumberFirst och gör om detta till ett tal.
  // Spara talet i variabeln numberToGuessFirst, vår variabel från här ovanifrån. Nu
  // har den variabeln fått rätt värde!
  numberToGuessFirst = Number(
    document.getElementById("givenNumberFirst").value
  );

  // Töm rutan så den inte innehåller facit :)
  document.getElementById("givenNumberFirst").value = "";
}

function guess() {
  // Koden här kommer köras när användare klickar på knappen Gissa

  // Hitta vår <input> från DOM
  const guessInput = document.getElementById("guessFirst");

  // Ta texten från <input> och gör om texten till ett tal.
  // Spara talet i variabeln userGuess
  const userGuess = Number(guessInput.value);

  // Kontrollera om gissningen är mindre än talet som skall gissas
  if (userGuess < numberToGuessFirst) {
    alert("Du gissade för lågt, prova igen");
  }

  // Kontrollera om gissningen är större än talet som skall gissas
  if (userGuess > numberToGuessFirst) {
    alert("Du gissade för högt, prova igen");
  }

  // Kontrollera om gissningen är lika med talet som skall gissas
  if (userGuess === numberToGuessFirst) {
    alert("Grattis, du gissade rätt!");
  }
}
