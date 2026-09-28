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
        },

        {
            question: "Which symbol is used to end a statement in C?",
            answers: [
                { text: ":", correct: false },
                { text: ";", correct: true },
                { text: ".", correct: false },
                { text: ",", correct: false }
            ]
        },

        {
            question: "Which function is the starting point of a C program?",
            answers: [
                { text: "Start", correct: false },
                { text: "Run", correct: false },
                { text: "Main", correct: true },
                { text: "Begin", correct: false }
            ]
        },

        {
            question: "What is JVM?",
            answers: [
                { text: "Java Virtual Machine", correct: true },
                { text: "Java Variable Method", correct: false },
                { text: "Java Visual Machine", correct: false },
                { text: "Java Version Manager", correct: false }
            ]
        },

        {
            question: "Which keyword is used to create an object in Java?",
            answers: [
                { text: "Class", correct: false },
                { text: "New", correct: true },
                { text: "Object", correct: false },
                { text: "Create", correct: false }
            ]
        },

        {
            question: "Which symbol is used for single-line comments in Java?",
            answers: [
                { text: "//", correct: true },
                { text: "#", correct: false },
                { text: "*", correct: false },
                { text: "/* */", correct: false }
            ]
        },

        {
            question: "Why is a primary key used?",
            answers: [
                {
                    text: "To uniquely identify each record",
                    correct: true
                },
                {
                    text: "To store duplicate records",
                    correct: false
                },
                {
                    text: "To delete table",
                    correct: false
                },
                {
                    text: "To create a database backup",
                    correct: false
                }
            ]
        },

        {
            question: "When is alert() used?",
            answers: [
                {
                    text: "To display a popup message",
                    correct: true
                },
                {
                    text: "To create an array",
                    correct: false
                },
                {
                    text: "To delete a variable",
                    correct: false
                },
                {
                    text: "To create a class",
                    correct: false
                }
            ]
        },

        {
            question: "Who is known as the father of the computer?",
            answers: [
                { text: "Alan Turing", correct: false },
                { text: "Charles Babbage", correct: true },
                { text: "Bill Gates", correct: false },
                { text: "Steve Jobs", correct: false }
            ]
        }

    ],


    "General Knowledge": [

        {
            question: "Which is the largest country in the world by area?",
            answers: [
                { text: "China", correct: false },
                { text: "USA", correct: false },
                { text: "India", correct: false },
                { text: "Russia", correct: true }
            ]
        },

        {
            question: "How many bones are there in an adult human body?",
            answers: [
                { text: "206", correct: true },
                { text: "196", correct: false },
                { text: "260", correct: false },
                { text: "226", correct: false }
            ]
        },

        {
            question: "Who is known as the father of the Nation in India?",
            answers: [
                { text: "Jawaharlal Nehru", correct: false },
                { text: "Sardar Patel", correct: false },
                { text: "Mahatma Gandhi", correct: true },
                { text: "Subhas Chandra Bose", correct: false }
            ]
        },

        {
            question: "What does RBI stand for?",
            answers: [
                { text: "Reserve Bank of India", correct: true },
                { text: "Royal Bank of India", correct: false },
                { text: "Regional Bank of India", correct: false },
                { text: "Reserve Banking Institute", correct: false }
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


    "Companies": [

        {
            question: "What does IBM stand for?",
            answers: [
                {
                    text: "Indian Business Machines",
                    correct: false
                },
                {
                    text: "International Business Machines",
                    correct: true
                },
                {
                    text: "International Business Management",
                    correct: false
                },
                {
                    text: "Integrated Business Machines",
                    correct: false
                }
            ]
        },

        {
            question: "Which company developed the Android operating system?",
            answers: [
                { text: "Apple", correct: false },
                { text: "Google", correct: true },
                { text: "Microsoft", correct: false },
                { text: "IBM", correct: false }
            ]
        },

        {
            question: "Who is the founder of Microsoft?",
            answers: [
                { text: "Steve Jobs", correct: false },
                { text: "Larry Page", correct: false },
                { text: "Elon Musk", correct: false },
                { text: "Bill Gates", correct: true }
            ]
        },

        {
            question: "Which company operates the Air India airline today?",
            answers: [
                { text: "Reliance Industries", correct: false },
                { text: "Tata Group", correct: true },
                { text: "Adani Group", correct: false },
                { text: "Mahindra Group", correct: false }
            ]
        },

        {
            question: "What is Amazon mainly known for?",
            answers: [
                {
                    text: "E-commerce and cloud computing",
                    correct: true
                },
                {
                    text: "Automobile manufacturing",
                    correct: false
                },
                {
                    text: "Search engines only",
                    correct: false
                },
                {
                    text: "Smartphone manufacturing only",
                    correct: false
                }
            ]
        }

    ],


    "Grammar": [

        {
            question: "What is the past tense of Go?",
            answers: [
                { text: "Goed", correct: false },
                { text: "Gone", correct: false },
                { text: "Went", correct: true },
                { text: "Going", correct: false }
            ]
        },

        {
            question: "What is the plural of Child?",
            answers: [
                { text: "Children", correct: true },
                { text: "Childs", correct: false },
                { text: "Childrens", correct: false },
                { text: "Childes", correct: false }
            ]
        },

        {
            question: "Identify the adverb: He runs quickly.",
            answers: [
                { text: "He", correct: false },
                { text: "Quickly", correct: true },
                { text: "Runs", correct: false },
                { text: "None", correct: false }
            ]
        },

        {
            question: "Which word is a pronoun?",
            answers: [
                { text: "Beautiful", correct: false },
                { text: "Quickly", correct: false },
                { text: "Run", correct: false },
                { text: "They", correct: true }
            ]
        },

        {
            question: "She arrived __ the airport at 6 p.m.",
            answers: [
                { text: "in", correct: false },
                { text: "at", correct: true },
                { text: "on", correct: false },
                { text: "by", correct: false }
            ]
        }

    ],


    "Science": [

        {
            question: "What is the chemical formula of water?",
            answers: [
                { text: "CO2", correct: false },
                { text: "H2O", correct: true },
                { text: "O2", correct: false },
                { text: "H2O2", correct: false }
            ]
        },

        {
            question: "Which is the nearest star to Earth?",
            answers: [
                { text: "Sun", correct: true },
                { text: "Polaris", correct: false },
                { text: "Sirius", correct: false },
                { text: "Proxima Centauri", correct: false }
            ]
        },

        {
            question: "Which organ controls most activities of the human body?",
            answers: [
                { text: "Heart", correct: false },
                { text: "Liver", correct: false },
                { text: "Brain", correct: true },
                { text: "Kidney", correct: false }
            ]
        },

        {
            question: "Which natural satellite orbits Earth?",
            answers: [
                { text: "Mars", correct: false },
                { text: "Sun", correct: false },
                { text: "Venus", correct: false },
                { text: "Moon", correct: true }
            ]
        },

        {
            question: "What is the hardest natural substance?",
            answers: [
                { text: "Iron", correct: false },
                { text: "Diamond", correct: true },
                { text: "Quartz", correct: false },
                { text: "Graphite", correct: false }
            ]
        }

    ]

};


// ======================================================
// LOGIN
// ======================================================

const loginButton =
    document.getElementById("login-btn");

const creatorButton =
    document.getElementById("creator-btn");

const loginError =
    document.getElementById("login-error");


if (loginButton) {

    loginButton.addEventListener("click", function () {

        const username =
            document.getElementById("username")
                .value
                .trim();

        const password =
            document.getElementById("password")
                .value
                .trim();


        if (username === "" || password === "") {

            loginError.innerHTML =
                "❌ Please enter username and password.";

            return;
        }


        // Normal user login
        // Any username and password are accepted.

        localStorage.setItem(
            "quizLoggedIn",
            "true"
        );

        localStorage.setItem(
            "quizUsername",
            username
        );


        localStorage.removeItem(
            "creatorLoggedIn"
        );


        window.location.href =
            "subjects.html";

    });

}


// ======================================================
// CREATOR LOGIN
// ======================================================

if (creatorButton) {

    creatorButton.addEventListener(
        "click",
        function () {

            const username =
                document.getElementById("username")
                    .value
                    .trim();

            const password =
                document.getElementById("password")
                    .value
                    .trim();


            // ==========================================
            // CREATOR CREDENTIALS
            // Username: creator
            // Password: 1234
            // ==========================================

            if (
                username === "creator" &&
                password === "1234"
            ) {

                localStorage.setItem(
                    "creatorLoggedIn",
                    "true"
                );


                localStorage.removeItem(
                    "quizLoggedIn"
                );


                window.location.href =
                    "users.html";

            }

            else {

                loginError.innerHTML =
                    "❌ Invalid creator username or password.";

            }

        }
    );

}


// ======================================================
// SUBJECT PAGE
// ======================================================

const subjectsList =
    document.getElementById("subjects-list");


if (subjectsList) {

    if (
        localStorage.getItem("quizLoggedIn")
        !==
        "true"
    ) {

        window.location.href =
            "login.html";

    }


    Object.keys(quizData).forEach(
        function (subject) {

            const button =
                document.createElement("button");


            button.classList.add(
                "subject-btn"
            );


            button.innerHTML =
                subject;


            button.addEventListener(
                "click",
                function () {

                    localStorage.setItem(
                        "selectedSubject",
                        subject
                    );


                    window.location.href =
                        "quiz.html";

                }
            );


            subjectsList.appendChild(
                button
            );

        }
    );

}


// ======================================================
// USER LOGOUT
// ======================================================

const logoutButton =
    document.getElementById("logout-btn");


if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "quizLoggedIn"
            );

            localStorage.removeItem(
                "quizUsername"
            );

            localStorage.removeItem(
                "selectedSubject"
            );


            window.location.href =
                "index.html";

        }
    );

}


// ======================================================
// QUIZ PAGE
// ======================================================

const questionElement =
    document.getElementById("question");

const answerButtons =
    document.getElementById("answer-buttons");

const nextButton =
    document.getElementById("next-btn");

const timerElement =
    document.getElementById("timer");

const subjectName =
    document.getElementById("subject-name");


if (
    questionElement &&
    answerButtons
) {

    if (
        localStorage.getItem("quizLoggedIn")
        !==
        "true"
    ) {

        window.location.href =
            "login.html";

    }


    const currentSubject =
        localStorage.getItem(
            "selectedSubject"
        );


    if (!currentSubject) {

        window.location.href =
            "subjects.html";

    }


    const questions =
        quizData[currentSubject];


    let currentQuestionIndex = 0;

    let score = 0;

    let timeLeft = 15;

    let timer;

    let resultSaved = false;

    let quizFinished = false;


    subjectName.innerHTML =
        currentSubject;


    // ==================================================
    // START TIMER
    // ==================================================

    function startTimer() {

        clearInterval(timer);


        timeLeft = 15;


        timerElement.innerHTML =
            "⏱ Time: " + timeLeft;


        timer = setInterval(
            function () {

                timeLeft--;


                timerElement.innerHTML =
                    "⏱ Time: " + timeLeft;


                if (timeLeft <= 0) {

                    clearInterval(timer);


                    Array.from(
                        answerButtons.children
                    ).forEach(
                        function (button) {

                            if (
                                button.dataset.correct
                                ===
                                "true"
                            ) {

                                button.classList.add(
                                    "correct"
                                );

                            }


                            button.disabled =
                                true;

                        }
                    );


                    nextButton.style.display =
                        "block";

                }

            },
            1000
        );

    }


    // ==================================================
    // RESET QUESTION
    // ==================================================

    function resetState() {

        nextButton.style.display =
            "none";


        while (
            answerButtons.firstChild
        ) {

            answerButtons.removeChild(
                answerButtons.firstChild
            );

        }

    }


    // ==================================================
    // SHOW QUESTION
    // ==================================================

    function showQuestion() {

        resetState();

        startTimer();


        const currentQuestion =
            questions[
                currentQuestionIndex
            ];


        questionElement.innerHTML =
            (currentQuestionIndex + 1)
            +
            ". "
            +
            currentQuestion.question;


        currentQuestion.answers.forEach(
            function (answer) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.innerHTML =
                    answer.text;


                button.classList.add(
                    "btn"
                );


                if (answer.correct) {

                    button.dataset.correct =
                        "true";

                }


                answerButtons.appendChild(
                    button
                );


                button.addEventListener(
                    "click",
                    selectAnswer
                );

            }
        );

    }


    // ==================================================
    // SELECT ANSWER
    // ==================================================

    function selectAnswer(event) {

        clearInterval(timer);


        const selectedButton =
            event.target;


        const isCorrect =
            selectedButton.dataset.correct
            ===
            "true";


        if (isCorrect) {

            score++;


            selectedButton.classList.add(
                "correct"
            );

        }

        else {

            selectedButton.classList.add(
                "incorrect"
            );

        }


        Array.from(
            answerButtons.children
        ).forEach(
            function (button) {

                if (
                    button.dataset.correct
                    ===
                    "true"
                ) {

                    button.classList.add(
                        "correct"
                    );

                }


                button.disabled =
                    true;

            }
        );


        nextButton.style.display =
            "block";

    }


    // ==================================================
    // SAVE RESULT
    // ==================================================

    function saveResult() {

        if (resultSaved) {

            return;

        }


        const username =
            localStorage.getItem(
                "quizUsername"
            )
            ||
            "Unknown User";


        const percentage =
            Math.round(
                (score / questions.length)
                *
                100
            );


        let results =
            JSON.parse(
                localStorage.getItem(
                    "quizResults"
                )
            )
            ||
            [];


        results.push({

            username:
                username,

            subject:
                currentSubject,

            score:
                score,

            total:
                questions.length,

            percentage:
                percentage,

            date:
                new Date().toLocaleString()

        });


        localStorage.setItem(
            "quizResults",
            JSON.stringify(results)
        );


        resultSaved =
            true;

    }


    // ==================================================
    // SHOW SCORE
    // ==================================================

    function showScore() {

        clearInterval(timer);


        const percentage =
            Math.round(
                (score / questions.length)
                *
                100
            );


        saveResult();


        let message;


        if (percentage === 100) {

            message =
                "🏆 Perfect Score!";

        }

        else if (percentage >= 50) {

            message =
                "👏 Good Job!";

        }

        else {

            message =
                "💪 Keep Practicing!";

        }


        timerElement.innerHTML =
            "";


        answerButtons.innerHTML =
            "";


        questionElement.innerHTML = `

            <div class="score-card">

                <div class="score-icon">
                    🏆
                </div>

                <h2>
                    ${message}
                </h2>

                <div class="score-number">

                    ${score}

                    <span>
                        / ${questions.length}
                    </span>

                </div>

                <p>
                    You scored
                    ${percentage}%
                    in ${currentSubject}
                </p>

            </div>

        `;


        nextButton.innerHTML =
            "Choose Subject";


        nextButton.style.display =
            "block";

    }


    // ==================================================
    // NEXT BUTTON
    // ==================================================

    nextButton.addEventListener(
        "click",
        function () {

            if (quizFinished) {

                window.location.href =
                    "subjects.html";

                return;

            }


            if (
                currentQuestionIndex
                <
                questions.length - 1
            ) {

                currentQuestionIndex++;


                showQuestion();

            }

            else {

                showScore();


                quizFinished =
                    true;

            }

        }
    );


    // ==================================================
    // BACK TO SUBJECTS
    // ==================================================

    const backButton =
        document.getElementById(
            "back-subject-btn"
        );


    if (backButton) {

        backButton.addEventListener(
            "click",
            function () {

                clearInterval(timer);


                window.location.href =
                    "subjects.html";

            }
        );

    }


    showQuestion();

}


// ======================================================
// CREATOR RESULTS PAGE
// ======================================================

const resultsList =
    document.getElementById(
        "results-list"
    );


if (resultsList) {

    // ==========================================
    // SECURITY CHECK
    // ==========================================

    if (
        localStorage.getItem(
            "creatorLoggedIn"
        )
        !==
        "true"
    ) {

        window.location.href =
            "login.html";

    }


    const results =
        JSON.parse(
            localStorage.getItem(
                "quizResults"
            )
        )
        ||
        [];


    // ==========================================
    // NO RESULTS
    // ==========================================

    if (results.length === 0) {

        resultsList.innerHTML = `

            <div class="user-card">

                <h3>
                    No quiz results yet.
                </h3>

                <p>
                    Users have not completed
                    any quizzes.
                </p>

            </div>

        `;

    }


    // ==========================================
    // DISPLAY RESULTS
    // ==========================================

    else {

        results
            .slice()
            .reverse()
            .forEach(
                function (result, index) {

                    const card =
                        document.createElement(
                            "div"
                        );


                    card.classList.add(
                        "user-card"
                    );


                    card.innerHTML = `

                        <h3>
                            ${index + 1}.
                            ${result.username}
                        </h3>

                        <p>
                            📚 Subject:
                            ${result.subject}
                        </p>

                        <p>
                            🏆 Score:
                            ${result.score}
                            /
                            ${result.total}
                        </p>

                        <p>
                            📊 Percentage:
                            ${result.percentage}%
                        </p>

                        <p>
                            🕒 Date:
                            ${result.date || "N/A"}
                        </p>

                    `;


                    resultsList.appendChild(
                        card
                    );

                }
            );

    }


    // ==========================================
    // CREATOR LOGOUT
    // ==========================================

    const creatorLogout =
        document.getElementById(
            "creator-logout-btn"
        );


    if (creatorLogout) {

        creatorLogout.addEventListener(
            "click",
            function () {

                localStorage.removeItem(
                    "creatorLoggedIn"
                );


                window.location.href =
                    "index.html";

            }
        );

    }

}
