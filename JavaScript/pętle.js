


const array6 = [];     // utworzenie pustej tablicy
const anotherArray = new Array(5);    //  utworzenie innej pustej tablicy o długości 5
const apess = ["🐒", "🦍", "🦧", "🐵"];
const heroNames = ["Hulk", "Black Widow", "Ms.Marvel", "Deadpool"];


console.log(array6);
console.log(anotherArray);
console.log(apess[0]);    //  pobranie/wyświetlenie pierwszego elementu tablicy
console.log(heroNames[0]);    //  wyświetlenie pierwszego elementu tablicy
console.log(heroNames[heroNames.length - 1]);   //  wyświetlenie ostatniego elementu tablicy
console.log(apess[apess.length - 1]);   //  wyświetlenie ostatniego elementu tablicy

for (const item in heroNames)       //  pętla iterująca po każdym elemencie tablicy, zwracająca indexy, które są stringami a nie numberami
{
    console.log(item);
}

for (const num of heroNames) {      //  pętla iterująca po każdym elemencie tablicy, zwracająca element
    console.log(num);
}

for (let elem of apess) {       //  pętla iterująca po każdym elemencie tablicy, zwracająca element
    console.log(elem);
}

for (var index in array5) {     //  pętla zwracająca index w formie string - nie number!!!
    console.log(index)
}












for (let index = 0; index < 10; index++) {
    console.log(index);
}

console.log("po pętli for");

//   while (confirm()) {
//   console.log("pętla");
//   }
//  metoda confirm jest wbudowana w przeglądarkę

console.log("po pętli while");