// pętle, powtórka
const apes = ["🐒", "🦍", "🦧", "🐵"];





// zadania na kolekcjach - tablice
const shopItems = [
  { type: "BIKE", name: "Super Rower 🚲", price: 1999_00, isBrandNew: true },
  {
    type: "BIKE",
    name: "Zmęczony rowerek 🚲",
    price: 850_25,
    isBrandNew: false,
  },
  { type: "CAR", name: "Stara Skoda 🚗", price: 4_000, isBrandNew: false },
];


let array9 = []
let array10 = []

console.log(array9);

shopItems.forEach((item, index) => {    // metoda forEach iteruje po każdym elemencie tablicy, nie modyfikując jej

  array9.push(item.price)   //  w tym przypadku dodaje do tablicy array9 wartość price każdego elementu

})

console.log(array9);



shopItems.forEach((item, index) => {

  array10.push(index, item.name);   //  teraz dodajemy do tablicy 10 najpierw index każdego elementu a następnie nazwę

})

console.log(array10);










// zadania na kolekcjach - obiekty
const todos = {
  "2022-05-06": {
    todos: ["Sprzątanie", "Kodowanie"],
    done: true,
  },
  "2022-05-07": {
    todos: ["Kodowanie", "Kino"],
    done: false,
  },
  "2022-05-08": {
    todos: ["Grill"],
    done: false,
  },
};



