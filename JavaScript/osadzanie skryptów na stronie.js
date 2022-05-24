

const elP = document.querySelector("p")     //  łapie nam pierwszy obiekt na stronie, w tym przypadku tag <p>
console.log(elP);


elP.remove();       //  usuwa element ze struktury HTML

const elP2 = document.querySelector("p");       //  łapie pierwszy element p
const elP3 = document.querySelector("p");       //  łapie pierwszy element p
const elP4 = document.querySelector("div p");       //  łapie pierwszy element p w div
console.log(elP2);
console.log(elP3);
console.log(elP4);



const allP = document.querySelectorAll("p");        //  tworzy NodeList - coś na wzór tablicy z możliwością iteracji
console.log(allP);


const allPArray = Array.from(allP);     //  a tutaj zamiana tej NodeList na prawdziwego arraya
console.log(allPArray);



console.log(elP3.parentElement);        //  odnosi się do swojego rodzica
console.log(elP3.nextElementSibling);       //  odnosi się do następnego elementu na tym samym poziomie



const glownyHeading = document.createElement("h1");     //  tworzenie tagu <h1>
const mniejszyHeading = document.createElement("h2");
document.body.append(glownyHeading);        //  dodanie <h1> do <body> dokumentu HTML - na końcu
document.body.prepend(mniejszyHeading);       //  dodanie <h1> do <body> dokumentu HTML - na początku



glownyHeading.innerHTML = "<textarea></textarea>";      //  dopisanie czystego kodu HTML'a
mniejszyHeading.innerText = "dopisanie czystego tekstu";        //  dopisanie tekstu



mniejszyHeading.style.color = "red";        //  dodawanie styli CSS
mniejszyHeading.setAttribute("class", "czerwony");      //  setAtribute przyjmuje dwa parametry i przekazuje je wskazanemu elementowi w kodzie HTML

// można dynamicznie usuwać atrybuty, np. .removeAtribute("class")

glownyHeading.toggleAttribute("div", "blue");   //  załącza lub wyłącza atrybut
elP2.hasAttribute("color", "white");        //  zwraca nam true albo false

elP3.classList.add("first", "cars", "ab");      //  dodawanie jednej lub kilku klas do danego elementu HTML