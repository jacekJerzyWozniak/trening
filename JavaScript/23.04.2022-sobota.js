const name = "Jan";
let age;
age = 18;
console.log(name);
console.log(age);
// name = "Michal";
console.log(name);




var x = 5;
var x;
console.log("x ", x);




const a = 10 % 8;
console.log(a);

const b = 4 % 3;
console.log(b);

const c = 4 % 2;
console.log(c);





let e = 3;
let f = 5;
console.log(e += e);
console.log(f -= f);






let user = "Jan";






console.log(typeof age);

const stringValue = "text";
console.log(typeof stringValue);
console.log(typeof 25);




let alertMessage = "";
if (age >= 18) {
    alertMessage = "Tak, user jest pełnoletni";
}
else {
    alertMessage = "Nie, user nie jest pełnoletni";
}



console.log(alertMessage);
const ageOfAge = 16;
const newAlertMessage = ageOfAge >= 18 ? "Tak, nowy użytkownik jest pełnoletni" : "Nie, użytkownik jest młodociany jezcze!";
console.log(newAlertMessage);




const expressionToCheck = false;
console.log(expressionToCheck ? "This is true!" : "This is false!");
const result = expressionToCheck ? "This is true!" : "This is false!";
console.log(result);




const array = [1, 2, 3];
const array2 = ["a", "b", "c"];
const array3 = [1, "a", "c", 9];
const array4 = [0.4, 6, "Jacek", false];

console.log(array2[2]);

//const arr = array5.from({ length: 500 }).fill(3);

//console.log(arr);






const indexOfJacek = array4.indexOf("Jacek");       //  pokazuje którym indexem w tablicy array4 jest zmienna "Jacek"
console.log(indexOfJacek);




const car = {
    model: 6,
    manufacturer: "Mazda",
    year: 2019,
    color: "red",
    engine: 2.5,
    fuel: "petrol",

    go: function () {
        console.log("No to jedziemy!")
    }
};




console.log(car);
console.log(car.fuel);




