


const myForm = document.forms.firstform;        // złapanie formularza firstform

myForm.addEventListener("change", () => {       //  sprawdza jakąkolwiek zmianę w calym formularzu

    console.log({
        user: myForm.user.value,        //  wyświetla wartość inputa z atrybutem user
        checkbox: myForm.saveName.checked,      //  wyświetla wartość inputa z atrybutem saveName
        data: myForm.date.value,        //  wyświetla wartość inputa z atrybutem date
        kolor: myForm.colorPicker.value     //  wyświetla wartość inputa z atrybutem colorPicker
    });

});






localStorage.setItem("nowy klucz", 782.5);      //  dodanie do local storage (string)

const fromLocalStorage = localStorage.getItem("nowy klucz");        //  wyciąganie z local storage i przypisanie do zmiennej

console.log(fromLocalStorage);

console.log(Number(fromLocalStorage));      //  wyświtlenie jako number a nie jako string

const anotherFromLocalStoraage = localStorage.getItem("xdfh");

console.log(anotherFromLocalStoraage);      //  zwraca nam 'null', ale nie błąd  bo podany klucz nie istnieje w local storage









const elInput = document.querySelector("input[name=user2]");
elInput.addEventListener("blur", () => {


    localStorage.setItem("blurKey", elInput.value);

});










localStorage.setItem("boolen", true);       // dodanie do lokal storage klucza 'boolean' o wartości 'true' jako sring a nie wartość logiczna

const myBoolean = localStorage.getItem("boolen");
console.log(myBoolean);     //  wyświetlenie zmiennej myBoolean
console.log(JSON.parse(myBoolean));     //  wyświetlenie z parso'wanej zmiennej myBoolean


const obj = { name: "Jan" };        //  tworzenie objektu
console.log(JSON.stringify(obj));       //  zamiana objektu na string
localStorage.setItem("obj", JSON.stringify(obj));       //  wepchnięcie obiektu w postaci stringa do local storage

const objFromLocalStorage = localStorage.getItem("obj");        //  pobranie string z local storage
console.log(objFromLocalStorage);
console.log(JSON.parse(objFromLocalStorage));       //  wyświetlenie sparsowanej wartości z local storage



