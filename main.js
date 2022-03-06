let date = document.getElementById("date")
let month = document.getElementById("month")
let year = document.getElementById("year").value;
let button = document.getElementById("button");



function get(){
 
    let CC = year.slice(0,2);
    let YY = year.slice(2,4);
    let MM = month.value;
    let DD = date.value;
    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    console.log(d)
  button.addEventListener('click', function(e){
    e.preventDefault();
    get();
  })
} 
