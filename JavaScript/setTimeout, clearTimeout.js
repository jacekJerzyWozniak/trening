

console.log("start");




setTimeout(() => {      //  prosta funkcja w wykorzystaniem setTimeout

    console.log("Jacek");

}, 2300);       //  drugim argumentem jest wartość czasu podana w ms, w tym przypadku 4,3 sekundy

// const time = prompt("Po jakim czsie ?");

// setTimeout(() => {

//     console.log("Tekst wyświetlany po czasie z prompta")

// }, Number(time));       //  teraz drugim argumentem jest wartość podana przez użytkownika






const timeout = setTimeout(() => {      //  przypisanie timeout do zmiennej

    console.log("Monika");

}, 7679);

console.log(timeout);       //  wyświetlenie id timeoutu
clearTimeout(timeout);      // anulowanie funkcji przypisanej do zmiennej timeout


const timeout2 = setTimeout(() => {     //  przypisanie timeoutu do zmiennej timeout2

    console.log("Monika już ma mnie w dupie");

}, 10000);

const button = document.querySelector("button");        //  złapanie buttona

button.addEventListener("click", () => {        //  dodanie zdarzenia

    clearTimeout(timeout2);     //  na kilk ma wyczyścicć timeout2

});
