

let h = 0;

function petla(h) {     //  pętla rekurencyjna
    console.log(h);

    if (h >= 5) {     //  warunek, do kiedy pętla ma trwać
        return;     //  przeranie pętli
    }
    petla(h + 1);       //  iteracja pętli
}

petla(h);       //  wywołanie pętli






const sayHello = () => {
    console.log("cześć");
}

sayHello();




// funkcja zamieniająca litery na duże

const makeWordUpperCase = (userName2) => {
    const upperCaseName = userName2.toUpperCase();
    console.log(upperCaseName);
}

makeWordUpperCase("jacek i monika");






// funkcja przyjmująca dwa argumenty


const userName = ((name, surname, land) => {

    console.log(`nazwa użytkownika to ${name} ${surname}`)
    return ret = `${name} ${surname}!`;
});

userName("Jacek", "Woźniak", 12)






//  funkcja bez wartości przyjmująca kilka argumentów i je wyświetlająca

function normalna() {

    console.log(arguments.length, arguments[3]);

};

normalna(4, 0, 12, 0.9, "string");








//  prosta funkcja dodawania

function dodaj(x, y) {

    return wynikDo = x + y;

};

//  prosta funkcja odejmwania

function odejmij(x, y) {

    return wynikOd = x - y;

};

odejmij(4, 8);
dodaj(9.5, 1.5);
console.log(wynikOd, wynikDo);


//  funkcja z callbackiem

function calc(a, b, callback) {

    console.log(`wprowadzone zostały wartości: ${a} i ${b}`);
    return callback(a, b);

};

const wynik = calc(4, 13, odejmij);

console.log(wynik);






//  funkcja silni

function silnia(n) {

    if (n == 1) return 1;
    else return wynikSilni = n * silnia(n - 1);

};


silnia(5);

console.log(wynikSilni);



