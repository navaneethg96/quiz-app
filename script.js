const quizData = [
    {
        question: "What is the most peferred programming language in 2021?",
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "C++",
        correct: "c"
    },
    {
        question: "What does CSS stand for?",
        a: "Cascading Style Sheet",
        b: "Central Secretariat Service",
        c: "Centrally Sponsored Scheme",
        d: "Compact Sub Station",
        correct: "a"
    },
    {
        question: "Which of the following is not a front end framework?",
        a: "Angular",
        b: "Vue",
        c: "React",
        d: "Spring Boot",
        correct: "d"
    },
    {
        question: "Who is the founder of Java?",
        a: "Brenden Eich",
        b: "Sun Microsystems",
        c: "Dennis M. Ritchie",
        d: "Guido van Rossum",
        correct: "b"
    },
    {
        question: "When was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b"
    },
];

const quiz = document.getElementById("quiz");
const ques = document.getElementById("question");
const answer = document.querySelectorAll(".answer");
// console.log(answer.id);
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitAns = document.getElementById("submitAns");

let counter = 0;
let score = 0;
let incorrect = 0;
loadQuiz();

function loadQuiz() {
    deselect();
    const currentQuizData = quizData[counter];
    ques.innerText = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function deselect() {
    answer.forEach((answer) => {
        answer.checked = false;
    });
}

submitAns.addEventListener("click", () => {
    const ans = getSelected();
    // console.log(ans);
    if (ans) {
        if (ans === quizData[counter].correct) {
            score++;
        }
        else {
            incorrect++;
        }
        counter++;

        if (counter < quizData.length) {
            loadQuiz();
            // submitAns.style.backgroundColor = '#2ecc71';
        }
        else {
            //  This block displays the final score and result msg
            quiz.innerHTML = `<h2> You have entered correctly ${score}/${quizData.length} qustions </h2>
            <p style="text-align: center;">Correct answer: 5 points &nbsp; Incorrect answer: -1 point</p>
            <h2> Your score is ${score*5 - incorrect} </h2>
            <button onClick="location.reload()"> Reload</button>`;
        }
    }
});

function getSelected() {
    let ans = undefined;
    answer.forEach((answer) => {
        if (answer.checked) {
            ans = answer.id;
        }
    });
    return ans;
}