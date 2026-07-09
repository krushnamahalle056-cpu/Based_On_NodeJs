function updateClock(){
const now = new Date();
let h = String(now.getHours()).padStart(2,"0");
let m = String(now.getMinutes()).padStart(2,"0");
let s = String(now.getSeconds()).padStart(2,"0");

document.getElementById("clock").innerHTML =
`${h}:${m}:${s}`;

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