

//  złapać poprawną lokalizację
const correctSection = document.querySelector("#js");


//  stworzenie elementu div
const elDiv = document.createElement("div");


//  dodanie elementu div do mojej sekcji
correctSection.append(elDiv);


//  stworzenie elementu h3
const elh3 = document.createElement("h3");


//  dodanie styli do h3
elh3.style.textAlign = "center";


//  dodanie tekstu do h3
elh3.innerText = "Jak dodać elementy HTML w JS?";


//  dodanie elementu h3 do diva
elDiv.append(elh3);

const elP1 = document.createElement("p");
elP1.innerText = "1. Stwórz element i przypisz do zmiennej";
elDiv.append(elP1);

const elCode1 = document.createElement("code");
elCode1.innerText = " const el = document.createElement('p');";
elDiv.append(elCode1);

const elP2 = document.createElement("p");
elP2.innerText = "2. Przypisz mu odpowiednie atrybuty itp.";
elDiv.append(elP2);

const elCode2 = document.createElement("code");
elCode2.innerText = " el.textContent = 'Paragraf!';";
elDiv.append(elCode2);

const elP3 = document.createElement("p");
elP3.innerText = "3. Dodaj go w odpowiednim miejscu drzewa DOM";
elDiv.append(elP3);

const elCode3 = document.createElement("code");
elCode3.innerText = "document.body.append(el)";
elDiv.append(elCode3);

const elP4 = document.createElement("p");
const elP5 = document.createElement("p");
elP4.innerText = "Brawo!";
elP5.innerText = "💪";
elP4.style.fontSize = "x-large";
elP4.style.textAlign = "center";
elP5.style.textAlign = "center";
elP4.style.marginBottom = "0px";
elP5.style.marginTop = "0px";
elDiv.append(elP4, elP5);