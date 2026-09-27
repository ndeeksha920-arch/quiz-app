// ======================================================
// QUIZ DATA
// ======================================================

const quizData = {
    "Computer Basics": [
        {
            question: "What does URL stand for?",
            answers: [
                { text: "Uniform Resource Locator", correct: true },
                { text: "Universal Reference Link", correct: false },
                { text: "Uniform Readable Link", correct: false },
                { text: "User Resource Locator", correct: false }
            ]
        },
        {
            question: "Which operating system is open-source?",
            answers: [
                { text: "Windows", correct: false },
                { text: "iOS", correct: false },
                { text: "Linux", correct: true },
                { text: "MS-DOS", correct: false }
            ]
        }
    ],

    "Programming": [
        {
            question: "Which data structure follows FIFO?",
            answers: [
                { text: "Stack", correct: false },
                { text: "Tree", correct: false },
                { text: "Graph", correct: false },
                { text: "Queue", correct: true }
            ]
        },
        {
            question: "Which language was developed by James Gosling at Sun Microsystems?",
            answers: [
                { text: "Java", correct: true },
                { text: "Python", correct: false },
                { text: "C", correct: false },
                { text: "PHP", correct: false }
            ]
        }
    ],

    "Companies": [
        {
            question: "What does IBM stand for?",
            answers: [
                { text: "Indian Business Machines", correct: false },
                { text: "International Business Machines", correct: true },
                { text: "International Business Management", correct: false },
                { text: "Integrated Business Machines", correct: false }
            ]
        }
    ]
};


// ======================================================
// LOGIN
// ======================================================

const loginButton = document.getElementById("login-btn");

if (loginButton) {
    loginButton.addEventListener("click", login);
}

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const loginError = document.getElementById("login-error");

    if (username === "admin" && password === "1234") {
        localStorage.setItem("quizLoggedIn", "true");
        window.location.href = "subjects.html";
    } else {
        loginError.textContent = "❌ Wrong username or password";
    }
}


// ======================================================
// SUBJECT PAGE
// ======================================================

const subjectsList = document.getElementById("subjects-list");

if (subjectsList) {

    if (localStorage.getItem("quizLoggedIn") !== "true") {
        window.location.href = "index.html";
    }

    Object.keys(quizData).forEach(function (subject) {

        const button = document.createElement("button");

        button.className = "subject-btn";
        button.textContent = subject;

        button.addEventListener("click", function () {
            localStorage.setItem("selectedSubject", subject);
            window.location.href = "quiz.html";
        });

        subjectsList.appendChild(button);
    });
}


// ======================================================
// LOGOUT
// ======================================================

const logoutButton = document.getElementById("logout-btn");

if (logoutButton) {
    logoutButton.addEventListener("click", function () {

        localStorage.removeItem("quizLoggedIn");
        localStorage.removeItem("selectedSubject");

        window.location.href = "index.html";
    });
}


// ======================================================
// QUIZ PAGE
// ======================================================

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const subjectName = document.getElementById("subject-name");

if (questionElement && answerButtons) {

    if (localStorage.getItem("quizLoggedIn") !== "true") {
        window.location.href = "index.html";
    }

    const currentSubject = localStorage.getItem("selectedSubject");

    if (!currentSubject || !quizData[currentSubject]) {
        window.location.href = "subjects.html";
    }

    const questions = quizData[currentSubject];

    let currentQuestionIndex = 0;
    let score = 0;
    let timeLeft = 15;
    let timer;

    subjectName.textContent = currentSubject;


    // ==================================================
    // TIMER
    // ==================================================

    function startTimer() {

        clearInterval(timer);

        timeLeft = 15;

        timerElement.textContent = "⏱ " + timeLeft + " sec";

        timerElement.classList.remove("timer-warning");

        timer = setInterval(function () {

            timeLeft--;

            timerElement.textContent = "⏱ " + timeLeft + " sec";

            if (timeLeft <= 5) {
                timerElement.classList.add("timer-warning");
            }

            if (timeLeft <= 0) {

                clearInterval(timer);

                Array.from(answerButtons.children).forEach(function (button) {

                    if (button.dataset.correct === "true") {
                        button.classList.add("correct");
                    }

                    button.disabled = true;
                });

                nextButton.style.display = "block";
            }

        }, 1000);
    }


    // ==================================================
    // RESET
    // ==================================================

    function resetState() {

        nextButton.style.display = "none";
        nextButton.textContent = "Next";

        while (answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }


    // ==================================================
    // SHOW QUESTION
    // ==================================================

    function showQuestion() {

        resetState();
        startTimer();

        const currentQuestion = questions[currentQuestionIndex];

        questionElement.textContent =
            `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

        currentQuestion.answers.forEach(function (answer) {

            const button = document.createElement("button");

            button.textContent = answer.text;
            button.className = "btn";

            if (answer.correct) {
                button.dataset.correct = "true";
            }

            answerButtons.appendChild(button);

            button.addEventListener("click", selectAnswer);
        });
    }


    // ==================================================
    // SELECT ANSWER
    // ==================================================

    function selectAnswer(event) {

        clearInterval(timer);

        const selectedButton = event.target;

        const isCorrect =
            selectedButton.dataset.correct === "true";

        if (isCorrect) {

            score++;

            selectedButton.classList.add("correct");

        } else {

            selectedButton.classList.add("incorrect");
        }

        Array.from(answerButtons.children).forEach(function (button) {

            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }

            button.disabled = true;
        });

        nextButton.style.display = "block";
    }


    // ==================================================
    // SCORE
    // ==================================================

    function showScore() {

        clearInterval(timer);

        const percentage =
            Math.round((score / questions.length) * 100);

        let message;

        if (percentage === 100) {
            message = "🏆 Perfect Score!";
        } else if (percentage >= 50) {
            message = "👏 Good Job!";
        } else {
            message = "💪 Keep Practicing!";
        }

        timerElement.textContent = "";

        answerButtons.innerHTML = "";

        questionElement.innerHTML = `
            <div class="score-card">

                <div class="score-icon">
                    🏆
                </div>

                <h2>${message}</h2>

                <div class="score-number">
                    ${score}
                    <span>/ ${questions.length}</span>
                </div>

                <p>
                    You scored ${percentage}% in ${currentSubject}
                </p>

            </div>
        `;

        nextButton.textContent = "Choose Subject";
        nextButton.style.display = "block";
    }


    // ==================================================
    // NEXT BUTTON
    // ==================================================

    nextButton.addEventListener("click", function () {

        if (currentQuestionIndex < questions.length - 1) {

            currentQuestionIndex++;

            showQuestion();

        } else {

            showScore();

            nextButton.onclick = function () {
                window.location.href = "subjects.html";
            };
        }
    });


    // ==================================================
    // BACK TO SUBJECTS
    // ==================================================

    const backButton =
        document.getElementById("back-subject-btn");

    if (backButton) {

        backButton.addEventListener("click", function () {

            clearInterval(timer);

            window.location.href = "subjects.html";
        });
    }


    // START QUIZ
    showQuestion();
}
