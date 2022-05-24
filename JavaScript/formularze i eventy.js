

const myForm = document.forms.firstform;        // złapanie formularza firstform
console.log(myForm.user);       //  wywołanie atrybutu user wewnątrz formularza firstform

console.log(myForm.saveName);




myForm.addEventListener("change", () => {

    console.log("change!!!");

});



//  preventDefault() zapobiega domyślnemu zachowaniu formularza, jakim jest przeładowanie strony po naciśnięciu entera.

myForm.addEventListener("submit", (event) => {

    if (confirm("czy napewno?")) {

    }
    else {

        event.preventDefault();

    }

});




myForm.addEventListener("change", () => {       //  sprawdza jakąkolwiek zmianę w calym formularzu

    console.log({
        user: myForm.user.value,        //  wyświetla wartość inputa z atrybutem user
        checkbox: myForm.saveName.checked,      //  wyświetla wartość inputa z atrybutem saveName
        data: myForm.date.value,        //  wyświetla wartość inputa z atrybutem date
        kolor: myForm.colorPicker.value     //  wyświetla wartość inputa z atrybutem colorPicker
    });

});


localStorage.setItem("nowy klucz", 782.5)