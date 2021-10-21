var timer = questions.length * 15;
var timeId;
var currentQuestionIndex = 0;

//DOM Elements
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var highScoreName = document.querySelector("#initials")
var seeAnswer = document.querySelector("#checkAnswer")
var feedbackElement = document.querySelector("#feedback")
//Start the quiz
function startQuiz() {
    //Hide start screen
     var startScreen = document.querySelector("#start-screen");
     startScreen.setAttribute("class", "hide")

     ///show questions
     questionsElement.removeAttribute("class", "unhide");
     timerId = setInterval(clock, 1000)
     timerElement.textContent = timer
     getCurrentQuestion();
    }

function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    
    var titleElement = document.querySelector("#question-title");
    titleElement.textContent = currentQuestion.title
    questionChoices.textContent = "";
  


   for(var i = 0; i < currentQuestion.choice.length; i++) {
      let choices = document.createElement("button");
        choices.setAttribute("class", "choice");
        choices.setAttribute("value", currentQuestion.choice[i]);
        choices.textContent = i + 1 +"." + currentQuestion.choice[i]
        console.log(choices);
        choices.addEventListener("click", checkAnswer);
        questionChoices.appendChild(choices);
  }
}

function checkAnswer () {
  if (this.value !== questions[currentQuestionIndex.answer]) {
    timer -= 15
    if (timer < 0) {
      timer = 0
      timerElement.textContent = timer

      feedbackElement.textContent = "WRONG";
    } else {
      feedbackElement.textContent = "CORRECT";
    }
  }
//   if (this.value === questions[currentQuestionIndex].answer) {
//     feedbackElement.textContent = "CORRECT";
// } else if (this.value !== questions[currentQuestionIndex].answer) {
//     feedbackElement.textContent = "WRONG";
//  }

feedbackElement.setAttribute("class", "feedback");
setTimeout(function(){
  feedbackElement.setAttribute("class","feedback hide")
}, 500)


  currentQuestionIndex++ 
 if (currentQuestionIndex === questions.length) {
    endQuiz()
    /// end quiz function/function endscreen() 
  }else {
      getCurrentQuestion()
    }
}

function endQuiz() {
  clearInterval(timerId)
  var endScreenElement = document.getElementById("end-screen")
  endScreenElement.removeAttribute("class");
  var finalScoreElement = document.getElementById("final-score")
  finalScoreElement.textContent = timer
  questionsElement.setAttribute("class", "hide");
}

function clock() {
  timer--
  timerElement.textContent = timer
  if (timer <= 0) {
    endQuiz()
  }
}

  function gameOver() {
  questionsElement.classList.add("hide");
  endScreenElement.classList.remove("hide");
  document.getElementById("final-score").textContent = timeLeft;
}
function finalScores() {
  const username = initialsEl.value
  const finalScore = {
    initials: username,
    score: seconds
  }
}



startBtn.addEventListener("click", startQuiz)
