var time = questions.length * 15;
var timerId;
var currentQuestionIndex = 0;

//DOM Elements
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices")


//Start the quiz
function startQuiz() {
    //Hide start screen
     var startScreen = document.querySelector("#start-screen");
     startScreen.setAtrribute("class", "hide")

     ///show questions
     questionsElement.removeAttribute("class");
     getCurrentQuestion();

}

function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    console.log(currentQuestion);
    var titleElement = document.querySelector("#question-title");
    titleElement.textContent = currentQuestion.title
    questionChoices.textContent = "";

    for(var i = 0; i < currentQuestion.choice.length; i++) {
        let choices = document.createElement("button");
        choices.setAttribute("class", "choice");
        choices.setAttribute("value", currentQuestion.choice[i]);
        
        choices.textContent = i + 1 +"." + currentQuestion.choice[i];
        questionChoices.appendChild(choices);
    }
}


















startBtn.addEventListener("click", startQuiz);





