function updateClock(){
    let now = new Date();

    let h = String(now.getHours()).padStart(2,"0");
    let m = String(now.getMinutes()).padStart(2,"0");
    let s = String(now.getSeconds()).padStart(2,"0");

    document.getElementById("clock").innerHTML = `${h}:${m}:${s}`;

    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    document.getElementById("date").innerHTML =
    `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    let greeting = "Good Evening";

}



setInterval(updateClock, 1000);
updateClock();