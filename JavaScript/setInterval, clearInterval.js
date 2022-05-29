

console.log("start 2.0");

// setInterval(() => {     //  stworzenie interwału

//     console.log("1");

// }, 500);
let count = 0;

const interval = setInterval(() => {

    console.log("2jeczka");

    count++     //  inkrementacja
    if (count == 100) {     //  warunek
        clearInterval(interval);        //  clearInterval
    }
}, 111);