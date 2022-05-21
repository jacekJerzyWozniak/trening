

const moto = {
    color: "blue",
    year: 1996,
    producer: "Kawasaki",
    engine: 0.6,
    fuel: "petrol",
    max_power: 60,
};

console.log(moto);

moto.torque = 72;       //  dodanie pola "torque" do objektu "moto"

console.log(moto);







const car = {       //  objekt "car" posiadający pola: model, year....
    model: "6",
    year: "2004",
    fuel: "petrol",
    manufacturer: "Mazda",
    engine: "1.8"
}

const { fuel, manufacturer } = car;     //  destrukturyzacja obiektu "car"
console.log(manufacturer, fuel);
console.log(car);

car.color = "grey";     //  dodanie pola "color" o wartości "grey" do objektu "car"
console.log(car);
const { engine, color, ...restOfCar } = car;
console.log(restOfCar);





for (let index in car) {        //  pętla FOR IN iteruje po tablicy  'car'
    console.log(car[index]);
}








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

console.log(Object.keys(todos));        //  zwraca klucze w formie tablicy
console.log(Object.values(todos));      //  zwraca wartości w formie tablicy
console.log(Object.entries(todos));     //  zwraca wszystko xD