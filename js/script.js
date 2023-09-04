
// toggle
const toggle = document.createElement("button");
document.getElementById("toggleButton").appendChild(toggle);
toggle.textContent = "24-hr";
let isToggled = false;

// for not display on the first screen
document.getElementById("hour24Box").style.display = "none";


var x = setInterval(function() {
var today = new Date();

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]


var year = today.getFullYear();
var months = month[today.getMonth()];
var date = today.getDate();
var day = daylist[today.getDay()];
var hoursFor24 = today.getHours();
document.getElementById("hoursFor24").innerHTML = hoursFor24;

// for 12
var hoursFor12 = today.getHours();
var amPm = (hoursFor12 >= 12)? "PM" : "AM";
hoursFor12 = (hoursFor12 >= 12)? hoursFor12 - 12 : hoursFor12;
if (hoursFor12 === 0){
  hoursFor12 = "00";
}
else if (hoursFor12 < 10){
  hoursFor12 = "0" + hoursFor12;
}

var minutes = today.getMinutes();
if (minutes < 10){
  minutes = "0" + minutes;
}

var seconds = today.getSeconds();
if (seconds < 10){
  seconds = "0" + seconds;
}
// for 12


// toggle event listener
toggle.addEventListener("click", function(){
  isToggled = !isToggled;
  if (isToggled){
    toggle.innerHTML = "12-hr";
    document.getElementById("ampm").style.display = "none";
    document.getElementById("hour12Box").style.display = "none";
    document.getElementById("hour24Box").style.display = "";
  }
  else{
    toggle.innerHTML = "24-hr";
    document.getElementById("ampm").style.display = "";
    document.getElementById("hour12Box").style.display = "";
    document.getElementById("hour24Box").style.display = "none";
  }
})


document.getElementById("monthAndYear").innerHTML = months + " " + date + ", " + year;
document.getElementById("date").innerHTML = day;
document.getElementById("hoursFor12").innerHTML = hoursFor12;
document.getElementById("hoursFor24").innerHTML = hoursFor24;
document.getElementById("minutes").innerHTML = minutes;
document.getElementById("seconds").innerHTML = seconds;
document.getElementById("ampm").innerHTML = amPm;
})

