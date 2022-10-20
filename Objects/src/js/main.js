let me = {
  firstname: "Sebastian",
  lastname: "Tegel",
  dateOfBirth: "1979-10-06",
  favColor: "Purple",
  age: 43,
};

let wife = {
  firstname: "Hanna",
  lastname: "Tegel",
  dateOfBirth: "1980-04-24",
  favColor: "Red",
  age: 42,
};

let family = [me, wife];

console.log(family);

let persons = document.getElementById("persons");

for (let i = 0; i < family.length; i++) {
  let container = document.createElement("div"); // <div></div>
  let name = document.createElement("h3"); // <h3></h3>
  let age = document.createElement("span");

  container.className = "person"; // <div class="person"></div>

  name.className = "person__name";
  name.innerHTML = family[i].firstname;

  age.className = "person__age";
  age.innerHTML = family[i].age;

  container.appendChild(name); // <div class="person"><h3></h3></div>
  container.appendChild(age);

  persons.appendChild(container);
}

/// Klasser

class Person {
  firstname;
  age;
}

let somePerson = new Person();
somePerson.firstname = "Sebastian";
somePerson.age = 43;

let yetAnotherPerson = new Person();
yetAnotherPerson.firstname = "Hanna";
yetAnotherPerson.age = 42;

// Klass med constructor

class Book {
  title;
  author;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

let lotr = new Book("Lord of The Rings", "J.R.R. Tolkien");
// lotr.title = "Lord of The Rings";
// lotr.author = "J.R.R. Tolkien";
let hp = new Book("Harry Potter och de vises sten", "J.K. Rowling");

console.log(somePerson);
console.log(yetAnotherPerson);
console.log(lotr);
console.log(hp);
