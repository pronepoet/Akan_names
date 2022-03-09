let date1 = document.getElementById("date")
let month = document.getElementById("month")
let year = document.getElementById("year");
let button = document.getElementById("get_name");



function calculate() {

    let YY = year.value;

    let MM = month.value;
    let DD = date1.value;
    const date = new Date(YY, MM, DD);



    return date.getDay();


}

function getName() {
    let display = document.getElementById("waria");
    let gender = document.getElementById("genderio")

    let index = calculate();
    let female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    let male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    if (gender.value === "Female") {
        let femName = female[index]
        display.innerHTML = `<h1>Your name is ${femName}</h1>`;
    } else if (gender.value === "Male") {
        let maleName = male[index]
        display.innerHTML = `<h1>Your name is ${maleName}</h1>`;
    }
}



button.addEventListener('click', function (e) {
    e.preventDefault();

    getName();
})