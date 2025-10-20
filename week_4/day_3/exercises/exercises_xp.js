/****************************
 * Destructuring & Classes — Solutions (tout-en-un)
 ****************************/

/* =========================
   🌟 Exercise 1 : Location
   ========================= */
const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207]
  }
};

const { name, location: { country, city, coordinates: [lat, lng] } } = person;
console.log("// Ex.1 ->", `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// Attendu: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)



/* ==============================
   🌟 Exercise 2 : Display Student Info
   ============================== */
function displayStudentInfo(objUser) {
  // destructuring du paramètre
  const { first, last } = objUser;
  return `Your full name is ${first} ${last}`;
}
console.log("// Ex.2 ->", displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));
// Attendu: "Your full name is Elie Schoppik"



/* =========================
   🌟 Exercise 3 : User & id
   ========================= */
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1 — transformer en tableau d'entrées
const entries = Object.entries(users);
console.log("// Ex.3 Part 1 ->", entries);
// Attendu: [ ['user1',18273], ['user2',92833], ['user3',90315] ]

// Part 2 — multiplier l'ID par 2
const doubled = entries.map(([k, v]) => [k, v * 2]);
console.log("// Ex.3 Part 2 ->", doubled);
// Attendu: [ ['user1',36546], ['user2',185666], ['user3',180630] ]



/* =========================
   🌟 Exercise 4 : Person class
   ========================= */
class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person('John');
console.log("// Ex.4 ->", typeof member);
// Attendu: "object"



/* =========================
   🌟 Exercise 5 : Dog class (extends)
   ========================= */
class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Seule l’option 2 fonctionne correctement : appel à super(name) avant d'utiliser this.
class Labrador extends Dog {
  constructor(name, size) {
    super(name);      // obligatoire pour initialiser this depuis la classe parente
    this.size = size;
  }
}

const lab = new Labrador("Buddy", "Large");
console.log("// Ex.5 ->", lab.name, lab.size, lab instanceof Dog);
// Attendu: "Buddy", "Large", true
// Pourquoi les autres échouent ?
// 1) et 4) utilisent this avant super -> ReferenceError.
// 3) appelle super(name) sans disposer de 'name' (param manquant) -> ReferenceError/undefined.



/* =========================
   🌟 Exercise 6 : Challenges
   ========================= */
// a) Évaluations (True/False)
console.log("// Ex.6 a1 ->", [2] === [2]); // false (références différentes)
console.log("// Ex.6 a2 ->", {} === {});   // false (références différentes)

// b) Valeurs après mutations / aliasing
const object1 = { number: 5 };
const object2 = object1;           // référence partagée avec object1
const object3 = object2;           // même référence encore
const object4 = { number: 5 };     // nouvel objet indépendant

object1.number = 4;
console.log("// Ex.6 b1 -> object2.number =", object2.number); // 4 (partage la même réf que object1)
console.log("// Ex.6 b2 -> object3.number =", object3.number); // 4 (toujours la même réf)
console.log("// Ex.6 b3 -> object4.number =", object4.number); // 5 (objet distinct)

// c) Classes Animal / Mammal + instance farmerCow
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(noise) {
    return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log("// Ex.6 c ->", farmerCow.sound("Moooo"));
// Attendu: "Moooo I'm a cow, named Lily and I'm brown and white"
