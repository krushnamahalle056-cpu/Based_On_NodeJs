function convertTemperature() {

    let temperature = Number(
        document.getElementById("temperature").value
    );

    let unit = document.getElementById("unit").value;
    let result;

    if (unit === "celsius") {
        result  =  (temperature * 9 / 5) + 32;

        document.getElementById("result").textContent =
            "Result: " + result.toFixed(2) + " °F";

    } else {

        result = (temperature - 32) * 5 / 9;

        document.getElementById("result").textContent =
            "Result: " + result.toFixed(2) + " °C";
            
    }
}
