let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {

    const input = document.getElementById("guessInput");

    const guess = Number(input.value);

    const message = document.getElementById("message");

    const attemptsText = document.getElementById("attempts");

    if (guess < 1 || guess > 100) {
        message.textContent = "⚠️ Please enter a number between 1 and 100.";
        message.style.color = "orange";
        return;
    }


    attempts++;

    attemptsText.textContent = attempts;

    if (guess === randomNumber) {

        message.textContent =
            `🎉 Correct! The number was ${randomNumber}!`;

        message.style.color = "green";


    } else if (guess < randomNumber) {

        message.textContent = "📈 Too low! Try a bigger number.";

        message.style.color = "red";


    } else {

        message.textContent = "📉 Too high! Try a smaller number.";

        message.style.color = "red";
    }

    input.value = "";
}


function resetGame() {

    randomNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    document.getElementById("attempts").textContent = "0";

    document.getElementById("message").textContent =
        "Game restarted! Make your guess.";

    document.getElementById("message").style.color = "#555";

    document.getElementById("guessInput").value = "";
    
}
