let age = 43;

if (age === "43") {
  console.log(true);
} else {
  console.log(false);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let numberOfTimesToLoop = 10000;
let currentLoop = 0;
while (currentLoop < numberOfTimesToLoop) {
  console.log(currentLoop);
  currentLoop++;
}
