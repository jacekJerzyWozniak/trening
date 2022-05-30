
//  JUNIOR: wyświetl licznik w konsoli (10,9,8,7....1,koniec!)

// let count = 10;

// setInterval(() => {


//     if (count >= 1) {
//         console.log(count);

//     }
//     count--;

//     if (count == 0) {
//         setTimeout(() => {
//             console.log("koniec!");
//         }, 1000)
//     }
// }, 1000);


// albo tak jak pokazał trener

// let counter = 10;

// const interval = setInterval(() => {

//     if (counter === 0) {
//         clearInterval(interval);
//         console.log("koniec!");
//     }
//     else {
//         console.log(counter);
//     }

//     counter--;
// }, 1000);







//  REGULAR: wyświetl licznik na stronie (10,9,8,7...1,koniec!)


// const eleh1 = document.querySelector("h1");


// let count = 10;

// setInterval(() => {


//     if (count >= 1) {
//         eleh1.innerText = count;

//     }
//     count--;

//     if (count == 0) {
//         setTimeout(() => {
//             eleh1.innerText = "koniec!";

//         }, 1000)
//     }
// }, 1000);






//  SENIOR: startuj licznik za pomocą kliknięcia w przycisk, kliknięcie ponowne - wyłącza licznik

// const newButton = document.createElement("button");
// newButton.innerText = "start/stop";
// document.body.append(newButton);
// const eleButton = document.querySelector("button");
// const eleh1 = document.querySelector("h1");
// let count = 10;


// eleButton.addEventListener("click", () => {


//     setInterval(() => {


//         if (count >= 1) {
//             eleh1.innerText = count;

//         }
//         count--;

//         if (count == 0) {
//             setTimeout(() => {
//                 eleh1.innerText = "koniec!";

//             }, 1000)
//         }
//     }, 1000);


// });

//nie dałem rady zrobić samemu. Poniżej przykład z lekcji

// let counter = 10;
// let interval = null;

// const counterContainer = document.querySelector("h1");
// const button = document.querySelector("button");

// counterContainer.innerText = counter;

// button.addEventListener("click", () => {

//     if (interval) {
//         clearInterval(interval);
//         interval = null;
//         button.innerText = "start";
//     }

//     else {
//         button.innerText = "stop";

//         interval = setInterval(() => {
//             if (counter === 0) {
//                 clearInterval(interval);
//                 console.log("koniec!");
//                 counterContainer.innerText = "koniec!";
//             }

//             else {
//                 console.log(counter);
//                 counterContainer.innerText = counter;
//             }
//             counter--;
//         }, 1000);
//     }
// });











//  DODATKOWO: po kliknięciu w przycisk wyświetl prompt, gdzie użytkownik może podać od ilu ma zacząć odliczanie


let counter = 10;
let interval = null;

const counterContainer = document.querySelector("h1");
const button = document.querySelector("button");

counterContainer.innerText = counter;

button.addEventListener("click", () => {



    if (interval) {
        clearInterval(interval);
        interval = null;
        button.innerText = "start";
    }

    else {
        button.innerText = "stop";

        counter = Number(prompt("od ilu zacząć odliczanie???"));

        interval = setInterval(() => {
            if (counter === 0) {
                clearInterval(interval);
                console.log("koniec!");
                counterContainer.innerText = "koniec!";
            }

            else {
                console.log(counter);
                counterContainer.innerText = counter;
            }
            counter--;
        }, 1000);
    }
});