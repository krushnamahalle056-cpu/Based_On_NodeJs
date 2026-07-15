let is24Hour = true;

// Theme Button
const themeBtn = document.getElementById("themeBtn");

// Format Button
const formatBtn = document.getElementById("formatBtn");

// ================= CLOCK =================

function updateClock() {

    const now = new Date();

    const currentHour = now.getHours();

    let h = currentHour;
    let m = now.getMinutes();
    let s = now.getSeconds();

    let ampm = "";

    // 12 / 24 Hour
    if (!is24Hour) {
        ampm = h >= 12 ? " PM" : " AM";
        h = h % 12 || 12;
    }

    h = String(h).padStart(2, "0");
    m = String(m).padStart(2, "0");
    s = String(s).padStart(2, "0");

    document.getElementById("clock").innerHTML =
        `${h}:${m}:${s}${ampm}`;

    // Date

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const months = [
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

    document.getElementById("date").innerHTML =
        `${days[now.getDay()]},
        ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

    // Greeting

    let greeting = "";

    if (currentHour < 12) {
        greeting = "🌞 Good Morning";
    }
    else if (currentHour < 18) {
        greeting = "☀️ Good Afternoon";
    }
    else {
        greeting = "🌙 Good Evening";
    }

    typeGreeting(greeting);
}

// Clock Update
updateClock();
setInterval(updateClock, 1000);

// ================= THEME TOGGLE =================

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
    else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});

// ================= 12 / 24 HOUR TOGGLE =================

formatBtn.addEventListener("click", () => {

    is24Hour = !is24Hour;

    if (is24Hour) {
        formatBtn.innerHTML = "12 Hour";
    } else {
        formatBtn.innerHTML = "24 Hour";
    }

    updateClock();

});


// Battery Status

const battery = document.getElementById("battery");

if ("getBattery" in navigator) {
     navigator.getBattery().then((bat) => {

        function updateBattery() {

            battery.innerHTML =
                `🔋 Battery : ${Math.round(bat.level * 100)}% ${
                    bat.charging ? "⚡ Charging" : ""
                }`;

        }

        updateBattery();

        bat.addEventListener("levelchange", updateBattery);
        bat.addEventListener("chargingchange", updateBattery);

    });
} else {

    battery.innerHTML = "Battery API Not Supported";

}

// add the typeing animation to the greeting text

