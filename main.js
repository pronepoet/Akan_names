let date = document.getElementById("date")
let month = document.getElementById("month")
let year = document.getElementById("year");
let button = document.getElementById("get_name");



function calculate(){
 
    let CC = year.value.slice(0,2);
    let YY = year.value.substring(2);
    let MM = month.value;
    let DD = date.value;
   let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

return d.toFixed();

  
} 

// female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
// male =  ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
function getName () {
    let gender = document.getElementById("genderio")
    console.log(gender.value)
let index = calculate();
let female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
let male =  ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
 if (gender.value == "Female") {
     console.log(female[index])
 }
 else{
     console.log(male[index])
 }
}



button.addEventListener('click', function(e){
    e.preventDefault();

 getName();
}) 