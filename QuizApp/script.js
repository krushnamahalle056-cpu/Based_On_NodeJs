const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used to style a webpage?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: "CSS"
    },

    {

        question: "Which language is used to make a webpage interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: "JavaScript"
    },

    {
        question: "Which tag is used to create a paragraph in HTML?",
        options: [
            "<h1>",
            "<p>",
            "<div>",
            "<br>"
        ],
        answer: "<p>"
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        options: [
            ".",
            "#",
            "*",
            "@"
        ],
        answer: "#"
    }
];

let currentQuestion = 0;
let score = 0;

const questionNumber = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");



function showQuestion() {

    const question = questions[currentQuestion];

    questionNumber.innerText =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";

    question.options.forEach(option => {

        const button = document.createElement("button");


        button.innerText = option;

        button.onclick = function () {
            checkAnswer(option);
        };

        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {

    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();

    } else {
        showResult();
    }
}

function showResult() {

    questionNumber.innerText = "";
    questionElement.innerText = "Quiz Completed!";

    optionsElement.innerHTML = "";

    resultElement.innerText =
        "Your Score: " + score + " / " + questions.length;

    nextButton.innerText = "Restart";
    nextButton.style.display = "inline-block";

    nextButton.onclick = restartQuiz;
    
}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    resultElement.innerText = "";

    nextButton.style.display = "none";

    showQuestion();
}

nextButton.style.display = "none";


showQuestion();
