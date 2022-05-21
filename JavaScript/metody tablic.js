



const music = [
    { performer: "Peja", title: "997", duration: 6.41, year: 1996, album: "Slums Attack" },
    { performer: "O.S.T.R.", title: "Kochana Polsko", duration: 3.09, year: 2002, album: "Tabasko" },
    { performer: "N.A.S.", title: "Ławka", duration: 3.59, year: 1998, album: "nieznany" },
    { performer: "Liroy", title: "Scyzoryk", duration: 8.16, year: 1995, album: "Alboom" },
    { performer: "Kaliber 44", title: "Normalnie o tej porze", duration: 4.23, year: 2000, album: "3:44" },
    { performer: "Molesta Ewenement", title: "Będzie dobrze, dzieciak", duration: 5.25, year: 2000, album: "...Taka płyta" },
    { performer: "Wzgórze Ya-Pa 3", title: "Libacja", duration: 3.23, year: 1998, album: "Ja mam to co ty" },
    { performer: "WWO", title: "Każdy ponad każdym", duration: 6.39, year: 2004, album: "Kodex2: proces" },
    { performer: "Pezet/Noon", title: "Seniorita", duration: 2.39, year: 2002, album: "Muzyka klasyczna" }
]



const checkThisProperty = music.find(item => {

    return item.duration > 4 && item.title === "Scyzoryk";

});

console.log(checkThisProperty);





const longerThan5 = music.filter(time => {

    return time.duration > 5.12;


});

console.log("Dłuższe niż 5 minut: ", longerThan5);

const downgradeMusic = longerThan5;




const oldestThan99 = downgradeMusic.filter(date => {

    return date.year <= 1998;

});

console.log("Starsze niż 99: ", oldestThan99);


const totalTime = music.reduce((prev, next) => {

    return prev + next.duration;

}, 0);


console.log("Czas trwania wszystkich utworów: ", totalTime);



const everyYear = music.reduce((prev2, data) => {

    let year = (prev2 + data.year);

    return year;

}, 0);


console.log("Średnia roku powstania wszystkich utworów: ", everyYear / (music.length));





const arr = [3, 10, 18, 20, -99, 12.5, 4];




const newArr = arr.forEach(every => {

    every *= every;

    every += "!";
    console.log("Tablica po metodzie forEach: ", every);

});



const newArr2 = arr.map(n => {
    return n ** 2;
});



const newArr3 = arr.filter(digit => {
    return digit < 12.5;
});


const newArr4 = arr.reduce((prev, x) => {
    return prev + x;
});


console.log("Tablica pierwotna: ", arr);


console.log("Tablica po metodzie map: ", newArr2);


console.log("Tablica po metodzie filter: ", newArr3);


console.log("Tablica po metodzie reduce: ", newArr4);















const shopItems = [
    { type: "BIKE", name: "Super Rower 🚲", price: 1999_00, isBrandNew: true },
    {
        type: "BIKE",
        name: "Zmęczony rowerek 🚲",
        price: 850_25,
        isBrandNew: false,
    },
    { type: "CAR", name: "Stara Skoda 🚗", price: 4000_00, isBrandNew: false },
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



shopItems.forEach((item, index, array) => {    // metoda forEach iteruje po każdym elemencie tablicy, nie modyfikując jej

    console.log(item.price, index, array[index])   //  w tym przypadku wyświetla wartość price każdego obiektu, jego index, oraz cały dany obiekt (nie tablicę)

})











const muzykaPoszukiwana = music.find(item => {      //  metoda find wyszukuje i zwraca pierwszy element spełniający warunek

    return item.duration > 2.30 && item.year >= 1998;

})

console.log(muzykaPoszukiwana);




const uzywanyPrzedmiot = shopItems.find(item => {       //  metoda find zwracająca pierwszy element z tablicy shopItems

    return item.isBrandNew == false;                    //  spełniający warunek z tej linii

})

console.log(uzywanyPrzedmiot);

const uzywanyRower = shopItems.find(item => {       //  metoda find zwracająca pierwszy element z tablicy shopItems

    return item.price > 1000_00 && item.isBrandNew == true;     //  spełniajaące warunki podane w tej linii

});

console.log(uzywanyRower);









const mniejNiz5Minut = music.filter(item => {       //  metoda filter działa podobnie jak find tylko że zwraca wszystkie elementy spełniające warunek i umieszcza je w nowej tablicy

    return item.duration <= 5;

});

console.log(mniejNiz5Minut);










const czyJest4 = arr.includes(4);       //  metoda includes sprawdza czy przekazana wartość występuje w tablicy. Zwraca true albo false
const czyJest33 = arr.includes(33);
console.log(czyJest4);
console.log(czyJest33);










const metodaSome = arr.some(item => {       //  metoda some działa podobnie jak includes, jednak można podać warunków do spełnienia

    return item < 11 && item > 20;

});

console.log(metodaSome);


const metodaSome2 = music.some(item => {        //  metoda some, jak i includes zwraca wartość, więc trzeba użyć słowa kluczowego return

    return item.year < 1997 && item.duration < 2.34;

});

console.log(metodaSome2);











const metodaEvery = shopItems.every(item => {       //  metoda every sprawdza każdy element tablicy i zwraca true tylko wtedy gdy wszystkie elementy tablicy spełniają warunek. 

    return item.price > 1000_00;

});

console.log(metodaEvery);

const metodaEvery2 = music.every(item => {      //  Jeśli choć jeden element zbioru nie spełnia wartości metoda zwraca false

    return item.year <= 2004;

});

console.log(metodaEvery2);










const metodaMap = shopItems.map((item, index) => {      //  metoda map nie modyfikuje oryginału, ale za to zwraca nam całkowicie nową tablicę

    return `${index + 1}: ${item.name} to koszt: ${item.price}`

});

console.log(metodaMap);


const metodaMap2 = music.map((item) => {

    return `Klasyki polskiego hh to m.in.: ${item.performer} z kawałkiem ${item.title} z roku ${item.year}`;

});

console.log(metodaMap2);










const array11 = [2, 4, 67, -9.5, 11, 0, 1, 2, 0];
console.log(array11);

const reversedArray11 = array11.reverse();      //  metoda reverse tworzy nową odwróconą tablicę na podstawie starej
console.log(reversedArray11);









const namesArray = ["Jacek", "Monika", 76, "Norka"];
const metodaJoin = namesArray.join("-");        //  metoda join nie modyfikuje pierwotnej tablicy. Natomiast wszystkie jej elementy traktuje jako stringi i wyświetla je równierz jako string łącząc znakiem
console.log(metodaJoin);

const metodaJoin2 = namesArray.join(", ");
console.log(metodaJoin2);








const metodaReduce = array11.reduce((prev, next) => {

    return prev + next;

}, 0);

console.log(metodaReduce);

const array12 = [23, -31, -7, 0, 0, 321, 55, 109, -1, 44, -44];

const minMax = array12.reduce((prev, next) =>       //  metoda reduce wybiera najmniejszą i największą wartość i umiescza w nowej talicy

    [Math.min(prev[0], next), Math.max(prev[1], next)], [1000, -1000]);


console.log(minMax);













