let is24Hour = true;

const formatBtn = document.getElementById("formatBtn");

formatBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
    formatBtn.innerHTML = is24Hour ? "12 Hour" : "24 Hour";
    updateClock();
});

function updateClock(){
const currentHour = now.getHours();

let h = currentHour;
let ampm = "";

if(!is24Hour){
    ampm = h >= 12 ? " PM" : " AM";
    h = h % 12 || 12;
}

h = String(h).padStart(2,"0");
let m = String(now.getMinutes()).padStart(2,"0");
let s = String(now.getSeconds()).padStart(2,"0");

document.getElementById("clock").innerHTML =
`${h}:${m}:${s}${ampm}`;

const days=[
"Sunday",
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
];

const months=[
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December"
];

document.getElementById("date").innerHTML=
`${days[now.getDay()]},
${now.getDate()}
${months[now.getMonth()]}
${now.getFullYear()}`;

let greeting;

if(h<12)
greeting="🌞 Good Morning";

else if(h<18)
greeting="☀️ Good Afternoon";

else
greeting="🌙 Good Evening";

document.getElementById("greeting").innerHTML=greeting;

}

setInterval(updateClock,1000);

updateClock();

// Theme Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});


formatBtn.onclick = () => {

    is24Hour = !is24Hour;

    formatBtn.innerHTML = is24Hour ? "12 Hour" : "24 Hour";

};