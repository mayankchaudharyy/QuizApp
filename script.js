const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
// const answerEls;
// const questionEl;
// const a_text;
// const b_text;
// const c_text;
// const d_text;
const submitBtn = document.getElementById("submit");

let currentQuiz = 0
let score = 0
let slct;
let ele = document.createElement("h2");
ele.innerText = `${score} out of ${currentQuiz}`;
quiz.appendChild(ele);

loadQuiz()

function loadQuiz() {
    let ran = Math.floor(Math.random() * quizData.length);
    slct = quizData[ran];
    let ques = document.querySelector("#question");
    console.log(ques);
    let a = document.querySelector("#a_text");
    let b = document.querySelector("#b_text");
    let c = document.querySelector("#c_text");
    let d = document.querySelector("#d_text");
    ques.innerText = slct["question"];
    a.innerText = slct["a"];
    b.innerText = slct["b"];
    c.innerText = slct["c"];
    d.innerText = slct["d"];
    currentQuiz += 1;
}

function deselectAnswers() {
    // let ans = document.querySelector('input[name="answer"]:checked').id;
}

function getSelected() {
    ele.innerText = `${score} out of ${currentQuiz}`;
    quiz.appendChild(ele);
}

submitBtn.addEventListener('click', () => {
    let ans1 = document.querySelector('input[name="answer"]:checked');
    let ans = ans1.id;
    ans1.checked = false;
    console.log(ans);
    console.log(slct["correct"]);
    if(ans === slct.correct){
        score += 1;
    }
    loadQuiz();
    getSelected();
})