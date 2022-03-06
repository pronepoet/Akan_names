
let date = document.getElementById(date)
let month = document.getElementById(month)
let year = document.getElementById(year)



function get(){
    d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
} 