

const sayHello = () => {
    console.log("cześć");
}

sayHello();


const sayHello2 = a => {
    console.log("cześć", a);
}

sayHello2("Janek");



const sum = (a, b) => {
    const sum = a + b;

    return sum;
}

const sumOfTwoNumbers = sum(11, 2);
console.log(sumOfTwoNumbers);





let x = 0;
function loop(x) {      //  funkcja rekurencyjna
    console.log(x)

    if (x >= 10) {
        return
    }

    loop(x + 1)
}

loop(x);








const newSum = Math.random();       //  tworzenie pseudolosowej
console.log(newSum);

const newSum2 = Math.random();      //  tworzenie pseudolosowej
console.log(newSum2);


let rand, pi, rand2;
rand = Math.random();       //  tworzenie pseudolosowej
pi = Math.PI;       //  tworzenie "pi"
rand2 = Math.random() * 10;     //  twozenie pseudolosowej
const array1 = [7, "Monika", rand, pi, (3 - (-7)), rand2];
console.log(array1);

let rand3 = Math.random();      //  tworzenie pseudolosowej
console.log(rand3);

let rand4 = Math.random() * 10;     //  tworzenie pseudolosowej pomnożonej o 10
console.log(rand4);

let rand5 = Math.floor(Math.random() * 10);     //  tworzenie zaokrąglonej pseudolosowej
console.log(rand5);

let rand6 = Math.floor(Math.random() * 11.4);
console.log(rand6);

let rand7 = Math.floor(Math.random() * 24.41);
console.log(rand7);

let rand8 = Math.random();      //  tworzenie pseudolosowej
console.log(rand8);
console.log(rand8 * 10);        //  towrenie pseudolosowej pomnożonej o 10
console.log(Math.floor(rand8));     //  tworzenie pseudolosowej zaokrąglonej
console.log(Math.floor(rand8 * 10));        //  tworzenie pseudolosowej zaokrąglonej i pomnożonej o 10






const date = new Date();
console.log(date);







const user = {
    name: "Ala",
    city: "Szczecin",
    tel: "0048123456789"
}

const { name, city } = user;        //  destrukturyzacja
console.log(name, city);
console.log(user);


const car = {       //  objekt "car" posiadający pola: model, year....
    model: "6",
    year: "2004",
    fuel: "petrol",
    manufacturer: "Mazda",
    engine: "1.8"
}

const { year, manufacturer, engine, model } = car;     //  zostaje zdesrukturyzowany tylko do pól "year", "manufacturer", "engine" i "model"
console.log(year, manufacturer);
console.log(model, year);
console.log(engine, model);


const moto = {
    color: "blue",
    year: 1996,
    producer: "Kawasaki",
    engine: 0.6,
    fuel: "petrol",
    max_power: 60,
}

const { max_power, color, ...restIcons } = moto;       //  ...rest operator wybiera nam wszystkie pola obiektu, badź indeksy tablicy, które nie zostały przez nas zdestruktyzowane
console.log(max_power);
console.log(color);
console.log(restIcons);



let a = 11;
let b = 3;
const array2 = [3, 54, -99, false, 0.18, "Fifi", (a - b), -1000, (b / 0.5)];
console.log(array2);

const [userName1, dateOfBirth, balance, areCatsMissing, ...restFields] = array2;        //  ...rest operator wybiera nam wszystkie indeksy tablicy albo pola obiekty, które nie zostały przez nas zdestrukturyzowane
console.log(areCatsMissing);
console.log(balance, dateOfBirth);
console.log(userName1);
console.log(balance, restFields);
