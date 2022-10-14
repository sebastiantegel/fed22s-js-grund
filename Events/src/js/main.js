// Definition av funktion
function start() {
  console.log("Hello world!");
}

// Anropar funktion - använd funktion - kör koden inuti funktionen
// start();

// Hitta knappen från DOM
let saveButton = document.getElementById("saveUser");
//console.log(saveButton.id);

// Lägg till en händelselyssnare som lyssnar på händelsen click och kör funktionen start
saveButton.addEventListener("click", start);

// document.getElementById("saveUser").addEventListener("click", start);
