const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "script",
        b: "style",
        c: "javascript",
        d: "js",
        e: "css",
        correct: "a",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Simple Sheets",
        c: "Cascading Style Sheets",
        d: "Cars SUV Sailboards",
        e: "These is not valid Opptions",
        correct: "c",
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        a: "Both the head section and the body section are correct",
        b: "The 'body' section",
        c: "The 'head' section",
        d: "None of the above",
        e: "type error",
        correct: "a",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "script name='xxx.js'",
        b: "script href='xxx.js'",
        c: "script id='xxx.js'",
        d: "script src='xxx.js'",
        e: "link src='xxx.js'",
        correct: "d",
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        a: "true",
        b: "false",
        c: "NaN",
        d: "None of the above",
        e: "boolen",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const e_text = document.getElementById('e-text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
    e_text.innerHTML = currentQuizData.e;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let selectedAnswer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            selectedAnswer = answerEl.id;
        }
    });
    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelected();
    if (selectedAnswer) {
        if (selectedAnswer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
