

const elInput = document.createElement("input");
elInput.setAttribute("type", "text");
document.body.append(elInput);

const elButton = document.createElement("button");
elButton.innerText = "zadanie 7";
document.body.append(elButton);

const elOl = document.createElement("ol");
document.body.append(elOl);

const elLi = document.createElement("li");
elOl.append(elLi);
elLi.innerText = "Stwórzcie formularz ( zwykkły input - type text), oraz button do zatwierdzania formularza";


const elLi2 = document.createElement("li");
elOl.append(elLi2);
elLi2.innerText = "Pod spodem niech wyświetla się lista TODO z czynnościami do wykonania";


const elLi3 = document.createElement("li");
elOl.append(elLi3);
elLi3.innerText = "Dane zapisujcie i pobierajcie z localStorage";

const clickButton = document.querySelector("button");

clickButton.addEventListener("click", () => {

    const elLi4 = document.createElement("li");
    elOl.append(elLi4);
    elLi4.innerText = 

});