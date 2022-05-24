

const elInput = document.querySelector("input");        //  łapie pierwszy element <input> na stronie

elInput.value = "domyślny tekst...";        //  stworzenie wartości domyślnej dla pierwszego elementu <input>





const dateInputElement = document.querySelector("input[name='date']")       //  łapie <input "date">

dateInputElement.addEventListener("change", event => {

    console.log(event.target.value);        //  wyświetla w konsoli datę wybraną na stronie
    //  można zapisać to jako console.log(new Date(event.target.value)) i wtedy przypisze to do nowej daty
});






const rangeInputElement = document.querySelector("input[name='scope']");        //  łapie <input "range>"

rangeInputElement.addEventListener("change", event => {

    console.log(event.target.value);

});







elInput.addEventListener("change", () => {

    console.log("change!!!!");

});


elInput.addEventListener("focus", () => {

    console.log("focus!!!!");

});


elInput.addEventListener("blur", () => {

    console.log("blur!!!!");

});


elInput.addEventListener("input", (event) => {

    console.log("input!!!!", event.target.value);

});






const checkbox = document.querySelector('[type="checkbox"]');
console.log(checkbox.checked);