
const age = "20";

const isAgeNumber = typeof age === "number"; //sprawdzenie czy zmienna age jest stringiem czy numberem

console.log(isAgeNumber);

if (isAgeNumber && age >= 18) {
    console.log("user jest pelnoletni");        //warunek pierwszy
}
else {
    console.log("user jest niepelnoletni");     //warunek drugi
}





const user1 = "Monika";
const user2 = "Jacek";

if (user1 == user2) {
    console.log("O! Imiona są takie same");
} else {
    console.log("Niestety imiona są inne!");
}

const userAge = 11;

if (userAge >= 18) {
    console.log("Uźytkownik jest pełnoletni");
} else {
    console.log("Cześć maluchu. Jeszcze dużo przed tobą!");
}




const newUserAge = 18;      // przypisanie wartości do zmiennej newUserAge
const terAge = newUserAge >= 18 ? "Brawo! Jesteś już pełnoletni" : "Niestety, kilka wiosen ci nadal brakuje";       // zastąpienie klasycznego if'a funkcją ternary expression
console.log(terAge);        // wywołanie wyniku na ekranie
