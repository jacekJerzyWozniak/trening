



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










