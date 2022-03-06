let date = document.getElementById("date")
let month = document.getElementById("month")
let year = document.getElementById("year");
let button = document.getElementById("get_name");



function get(){
 
    let CC = year.value.slice(0,2);
    let YY = year.value.substring(2);
    let MM = month.value;
    let DD = date.value;
   let d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

    console.log(d.toFixed())

  button.addEventListener('click', function(e){
       e.preventDefault();

       get();
  }) 
} 
