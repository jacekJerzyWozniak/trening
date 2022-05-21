
const a = 0;
const b = -6;
const c = 0.45;

const array = [1, 2, 3, "Jacek", false, 4.55, (a + b), (c / [5]), ([5] * [7])];
const array2 = ["Ala ma kota", true, 17, true, (b - c), 144, "Monika"];
const array3 = [false, "Mruczek", 4.18, (c / b), ""];

console.log(array);
console.log(array2.length);     //  sprawdzenie dłgości tablicy array2
console.log(array3);






const newest = Array.from({ length: 100 }).fill(3)  //  wieloindeksowa tablica z przypisaną jedną zmienną

console.log(newest);






array2[10] = 0.99;      //  dodanie zmiennej o wartości 0.99 do indexu 10 tablicy array2






console.log(array2);
const lengthOfArray = array.length;     //  zapisanie do zmiennej lengthOfArray wartość długości tej tablicy
array[lengthOfArray] = "Monika wróciła z pracy";        //  zapisanie do tablicy array zmiennej string "Monika wróciła z pracy" pod indeksem zwróconym z metody .length dla zmiennej lengthOfArray
console.log(array);






array3.push(true);      //  dodanie zmiennej do tablicy array3
console.log(array3);

array3.push("Norka");   //  dodanie zmiennej do tablicy array3
console.log(array3);

array.push(false);      //  dodanie zmiennej do tablicy array
console.log(array);






const array4 = [...array, 1000];      //  "rozpakowanie" tablicy array w nowej tablicy array4 i dopisanie zmiennej 1000 w ostatnim indeksie
console.log(array4);

const list = [...array3, true, 500];        //  "rozpakowanie tablicy arrya3 w nowej tablicy list i dopisanie dwóch zmiennych na końcu"
console.log(list);





console.log(array2.length);
console.log(array2[6]);
array2.pop();       //  usunięcie ostaniego indexu z tablicy array2
array2.pop();       //  usunięcie ostaniego indexu z tablicy array2
array2.pop();       //  usunięcie ostaniego indexu z tablicy array2
array2.pop();       //  usunięcie ostaniego indexu z tablicy array2
console.log(array2);
console.log(array2.length);

list.pop();     //  usunięcie ostaniego indexu z tablicy list








array3.unshift(false);      //  dodaje zmienną na sam początek tabeli, czyli na zmienną o indexie 0
array3.unshift(true);       //  dodaje zmienną na sam początek tabeli, czyli na zmienną o indexie 0
console.log(array3);

list.unshift("poniedziałk");        //  dodaje zmienną "poniedziałek" na sam początek tabeli list
list.unshift(13.13);        //  dodaje zmienną 13.13 na sam początek tabeli list
console.log(list);





console.log(array);
array.shift();      //  zdjęcie pierwszego elementu z tablicy array
console.log(array);

console.log(array3);
array3.shift();     //  zdjęcie pierwszej zmiennej z tablicy array3
console.log(array3);






const array5 = [...array4, ...array2];      //  konkatenacja dwóch tablic
console.log(array5);







const array6 = [];     // utworzenie pustej tablicy
const anotherArray = new Array(5);    //  utworzenie innej pustej tablicy o długości 5
const apess = ["🐒", "🦍", "🦧", "🐵"];
const heroNames = ["Hulk", "Black Widow", "Ms.Marvel", "Deadpool"];


console.log(array6);
console.log(anotherArray);
console.log(apess[0]);    //  pobranie/wyświetlenie pierwszego elementu tablicy
console.log(heroNames[0]);    //  wyświetlenie pierwszego elementu tablicy
console.log(heroNames[heroNames.length - 1]);   //  wyświetlenie ostatniego elementu tablicy
console.log(apess[apess.length - 1]);   //  wyświetlenie ostatniego elementu tablicy

for (const item in heroNames)       //  pętla iterująca po każdym elemencie tablicy, zwracająca indexy, które są stringami a nie numberami
{
    console.log(item);
}

for (const num of heroNames) {      //  pętla iterująca po każdym elemencie tablicy, zwracająca element
    console.log(num);
}

for (let elem of apess) {       //  pętla iterująca po każdym elemencie tablicy, zwracająca element
    console.log(elem);
}

for (var index in array5) {     //  pętla zwracająca index w formie string - nie number!!!
    console.log(index)
}








const objApes = []

for (const ape of apess) {
    objApes.push({ type: "ape", ape: ape });        //  dodanie do tablicy objektów, oraz dodanie type: ape
}

console.log(objApes);








const array7 = [23, 4, -9.5, 77, 0, 1.25, 909, 321, 44]


console.log(array7.slice(2, 5));        //  metoda slice zwraca nam nową tablicę ze wskazanymi wartościami. 2 oznacza index rozpoczęcia "wycinania", natomiast 5 to index przed którym kończymy "wycinanie"
console.log(array7);

console.log(array7.splice(2, 5));       //  metoda splice modyfikuje obecną tablicę. W tym przypadku "wycina" 5 elementów rozpoczynając od indeksu 2 
console.log(array7);


const array8 = [77, 0, 1.25, 71, -19, 0, 1, -3]

console.log(array8);
console.log(array8.splice(2, 6, 87, -33, 0));      //  metoda splice modyfikuje obecną tablicę. W tym przypadku "wycina" 6 elementów zaczynając od indeksu 2. Po "wycięciu" na końcu tab;icy dodaje wartości 87, -33, 0
console.log(array8);










