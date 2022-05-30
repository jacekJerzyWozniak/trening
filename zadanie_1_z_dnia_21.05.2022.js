
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





//  REGULAR: wyświetl licznik na stronie (10,9,8,7...1,koniec!)


const eleh1 = document.querySelector("h1");



let count = 10;

setInterval(() => {


    if (count >= 1) {
        eleh1.innerText = count;

    }
    count--;

    if (count == 0) {
        setTimeout(() => {
            eleh1.innerText = "koniec!";

        }, 1000)
    }
}, 1000);



//  SENIOR: startuj licznik za pomocą kliknięcia wprzycisk, kliknięcie ponowne - wyłącza licznik


//  DODATKOWO: po kliknięciu w przycisk wyświetl prompt, gdzie użytkownik może podać od ilu ma zacząć odliczanie