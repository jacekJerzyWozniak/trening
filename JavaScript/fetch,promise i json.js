
// fetch("https://rickandmortyapi.com/api").then(dowolnaNazwa => {     //  pobranie z API

//     console.log(dowolnaNazwa);
//     console.log(dowolnaNazwa.redirected);

//     return dowolnaNazwa.json()      //  zwrócenie wyniku API  i użycie metody json

// })

//     .then(tty => {      //  zwrócona metoda json - przekazana do kolejnego promisa

//         console.log(tty);

//     })









// fetch("https://rickandmortyapi.com/api/character").then(response => {     //  pobranie z API

//     console.log(response);
//     console.log(response.redirected);

//     return response.json()      //  zwrócenie wyniku API  i użycie metody json

// })

//     .then(tty => {      //  zwrócona metoda json - przekazana do kolejnego promisa

//         console.log(tty);

//     })












// fetch("https://rickandmortyapi.com/api")
//     .then((odpowiedz) => {
//         console.log(odpowiedz);
//         console.log(odpowiedz.body);
//         return odpowiedz.json()
//     })

//     .then((mozeBycInnaNazwa) => {
//         console.log(mozeBycInnaNazwa);

//     })










// const eleButton = document.querySelector("button");
// const fetchButton = document.getElementById("fetch");

// let characters;

// eleButton.addEventListener("click", () => {

//     const charactersCountInfo = document.createElement("p");

//     charactersCountInfo.innerText = `Mamy ${characters.info.count} lokalizacji`;

//     document.body.append(charactersCountInfo);


// })

// fetchButton.addEventListener("click", () => {

//     fetch("https://rickandmortyapi.com/api/location")

//         .then((response) => {
//             console.log(response);

//             return response.json()
//         })

//         .then((res) => {

//             characters = res;

//             eleButton.disabled = false

//         })

// })










// fetch("https://rickandmortyapi.com/api/character/3")

//     .then(dobrowolnaNazwa => dobrowolnaNazwa.json())
//     .then((dowolnaNazwa) => {

//         console.log(dowolnaNazwa);
//         console.log(dowolnaNazwa.name);
//     });



// fetch("https://rickandmortyapi.com/api/character/1")

//     .then(dobrowolnaNazwa => dobrowolnaNazwa.json())
//     .then((dowolnaNazwa) => {

//         console.log(dowolnaNazwa);
//         console.log(dowolnaNazwa.name);
//     });


// Promise.all([

//     fetch("https://rickandmortyapi.com/api/character/3").then(result => result.json()),
//     fetch("https://rickandmortyapi.com/api/character/1").then(result => result.json()),

// ])
//     .then((res) => {
//         console.log(res);
//     });











fetch("https://rickandmortyapi.com/api/character/?name=rick")
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    })



const zapytanieOImie = prompt("Podaj imię: ");

fetch(`https://rickandmortyapi.com/api/character/?name=${zapytanieOImie}`)
    .then((res) => res.json())
    .then((res) => {
        console.log(res);
    })