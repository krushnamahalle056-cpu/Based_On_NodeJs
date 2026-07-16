// State Variables
let is24Hour = true;
let typing;
let lastGreeting = "";

// DOM Elements
const themeBtn = document.getElementById("themeBtn");
const formatBtn = document.getElementById("formatBtn");
const clockElement = document.getElementById("clock");
const ampmElement = document.getElementById("ampm");
const dateElement = document.getElementById("date");
const greetingElement = document.getElementById("greeting");
const batteryElement = document.getElementById("battery");
const networkStatus = document.getElementById("networkStatus");

// ================= CLOCK LOGIC =================

function updateClock() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let ampm = "";

    // Determine Greeting
    let currentGreeting = "";
    if (h < 12) {
        currentGreeting = "🌞 Good Morning";
    } else if (h < 18) {
        currentGreeting = "☀️ Good Afternoon";
    } else {
        currentGreeting = "🌙 Good Evening";
    }

    // Trigger Typing Animation only if greeting changes
    if (currentGreeting !== lastGreeting) {
        typeGreeting(currentGreeting);
        lastGreeting = currentGreeting;
    }

    // 12 / 24 Hour Logic
    if (!is24Hour) {
        ampm = h >= 12 ? "PM" : "AM";
        h = h % 12 || 12; // Converts 0 to 12 for midnight
    }

    // Format with leading zeros
    h = String(h).padStart(2, "0");
    m = String(m).padStart(2, "0");
    s = String(s).padStart(2, "0");

    // Display Time
    clockElement.innerHTML = `${h}:${m}:${s}`;
    ampmElement.innerHTML = ampm;

    // Display Date
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    dateElement.innerHTML = `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

// Typing Animation Logic
function typeGreeting(text) {
    clearInterval(typing);
    greetingElement.innerHTML = "";
    let i = 0;

    typing = setInterval(() => {
        greetingElement.innerHTML += text.charAt(i);
        i++;
        if (i >= text.length) {
            clearInterval(typing);
        }
    }, 80);
}

// Start Clock
updateClock();
setInterval(updateClock, 1000);

// ================= THEME TOGGLE =================

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    
    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// ================= 12 / 24 HOUR TOGGLE =================

formatBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
    formatBtn.innerHTML = is24Hour ? "12 Hour" : "24 Hour";
    updateClock(); // Update immediately on click
});

// ================= BATTERY STATUS =================

if ("getBattery" in navigator) {
    navigator.getBattery().then((bat) => {
        function updateBattery() {
            batteryElement.innerHTML = `🔋 ${Math.round(bat.level * 100)}% ${bat.charging ? "⚡" : ""}`;
        }
        updateBattery();
        bat.addEventListener("levelchange", updateBattery);
        bat.addEventListener("chargingchange", updateBattery);
    }).catch(() => {
        batteryElement.innerHTML = "🔋 Status Hidden";
    });
} else {
    batteryElement.innerHTML = "🔋 Not Supported";
}

// ================= NETWORK STATUS =================

function updateNetworkStatus() {
    if (navigator.onLine) {
        networkStatus.innerHTML = "🟢 Online";
        // Inline styles removed, relying on CSS classes/theme instead
        networkStatus.style.color = ""; 
    } else {
        networkStatus.innerHTML = "🔴 Offline";
        networkStatus.style.color = "#ff4444";
    }
}

// Listen for network changes
window.addEventListener("online", updateNetworkStatus);
window.addEventListener("offline", updateNetworkStatus);

// Initial Call
updateNetworkStatus();