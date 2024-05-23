let questions = [
    {
        question: "Thủ đô của Việt Nam là gì?",
        choices: ["Hà Nội", "TP.HCM", "Đà Nẵng", "Cần Thơ"],
        correctAnswer: 0
    }, {
        question: "22",
        choices: ["Hà Nội", "TP.HCM", "Đà Nẵng", "Cần Thơ"],
        correctAnswer: 0
    }
    // Thêm nhiều câu hỏi khác tại đây...
];

let currentQuestion = 0;

function showQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("choice0").innerText = q.choices[0];
    document.getElementById("choice1").innerText = q.choices[1];
    document.getElementById("choice2").innerText = q.choices[2];
    document.getElementById("choice3").innerText = q.choices[3];
}

document.getElementById("next").onclick = function () {
    if (questions.correctAnswer = true) {  currentQuestion++;
    }
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        alert("Congratulations, you are a billionaire!");
    }
};

// Bắt đầu trò chơi
showQuestion();