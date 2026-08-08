function calculateBMI() {

    const weight = parseFloat(
        document.getElementById("weight").value
    );

    const height = parseFloat(
        document.getElementById("height").value
    );

    const error = document.getElementById("error");

    const bmiValue = document.getElementById("bmiValue");

    const bmiCategory = document.getElementById("bmiCategory");

    const meterBar = document.getElementById("meterBar");


    // Clear previous error

    error.innerText = "";

    // Validation

    if (
        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0
    ) {

        error.innerText =
            "Please enter valid weight and height.";

        return;
    }


    // Convert cm to meters

    const heightInMeters = height / 100;


    // BMI Formula

    const bmi =
        weight / (heightInMeters * heightInMeters);


    const finalBMI = bmi.toFixed(1);


    // Display BMI

    bmiValue.innerText = finalBMI;

    // BMI Categories

    let category;

    let color;

    let meterPosition;


    if (bmi < 18.5) {

        category = "Underweight";

        color = "#3498db";

        meterPosition = Math.max(
            0,
            (bmi / 40) * 100
        );

    }

    else if (bmi < 25) {

        category = "Normal Weight";

        color = "#2ecc71";

        meterPosition = (bmi / 40) * 100;

    }

    else if (bmi < 30) {

        category = "Overweight";

        color = "#f1c40f";

        meterPosition = (bmi / 40) * 100;

    }


    else {

        category = "Obesity";

        color = "#e74c3c";

        meterPosition =
            Math.min((bmi / 40) * 100, 100);

    }

    // Display category

    bmiCategory.innerText = category;

    bmiCategory.style.color = color;

    bmiValue.style.color = color;

    // Move BMI meter indicator


    meterBar.style.left =
        `calc(${meterPosition}% - 8px)`;

    meterBar.style.background = color;
}


function resetBMI() {

    document.getElementById("weight").value = "";

    document.getElementById("height").value = "";

    document.getElementById("error").innerText = "";

    document.getElementById("bmiValue").innerText = "--";

    document.getElementById("bmiCategory").innerText =
        "Enter your details";

    document.getElementById("bmiCategory").style.color =
        "#333";

    document.getElementById("bmiValue").style.color =
        "#667eea";

    document.getElementById("meterBar").style.left = "0";

    document.getElementById("meterBar").style.background =
        "#222";
}
