
// const zamawiamSzame = new Promise((resolve, reject) => {
//     // resolve("Pizza");
//     reject("Frytki");
// });

// console.log(zamawiamSzame);

// zamawiamSzame

//     .then((szama) => {
//         console.log(`Dostałem zamówienie: ${szama}`);

//     })
//     .catch((blad) => {
//         console.log(`Tym razem przyszło: ${blad}`);
//     });








;

function addCatImage(afterLoadFn) {

    const img = new Image(150);

    img.src = "http://thecatapi.com/api/images/get";

    img.addEventListener("load", () => {
        afterLoadFn(img);
    });
};

addCatImage((img) => {
    document.body.append(img);
});








