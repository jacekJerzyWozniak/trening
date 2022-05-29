

// JUNIOR: kolor strony zmieni się po 5 sekundach

// const elBody = document.querySelector("body");

// setTimeout(() => {

//     elBody.style.backgroundColor = "#12345a";

// }, 5000);






//  REGULAR: zanim zmienisz kolor strony zapytaj użytkownika czy chce to zrobić


// const elBody = document.querySelector("body");


// const pro = prompt("czy chcesz zmienić kolor strony?")


// setTimeout(() => {

//     if (pro != null) {
//         elBody.style.backgroundColor = "green";
//     }
// }, 5000);

// zamiast promta można użyć metody confirm która zwraca wartość logiczną







//  SENIOR: wybierz kolor z inputa (type="color"). Po 5 sekundach od tego momentu zmieni się kolor na wybrany

const input = document.createElement("input");
elInput = document.querySelector("input");
input.setAttribute("type", "color");
document.body.append(input);

input.addEventListener("change", () => {


    localStorage.setItem("kolor", input.value)

    setTimeout(() => {


        document.body.style.backgroundColor = localStorage.getItem("kolor");

    }, 5000);

});



