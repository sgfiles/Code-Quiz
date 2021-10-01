var timer = questions.length * 15;
var timeId;
var currentQuestionIndex = 0;
var score = 0

//DOM Elements
var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions");
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var highScoreName = document.querySelector("#initials")
var seeAnswer = document.querySelector("#checkAnswer")

//Start the quiz
function startQuiz() {
    //Hide start screen
     var startScreen = document.querySelector("#start-screen");
     startScreen.setAttribute("class", "hide")

     ///show questions
     questionsElement.removeAttribute("class", "unhide");
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
 console.log(this);
  if (this.value === questions[currentQuestionIndex].answer) {
    console.log("correct");
} else if (this.value !== questions[currentQuestionIndex].answer) {
    console.log("wrong");
 }
  currentQuestionIndex++ 
  getCurrentQuestion()
  if (currentQuestionIndex === questions.length) {
    /// end quiz function
    //function endscreen() 
  }else {
      getCurrentQuestion()
    }
}



// countdown timer 
var timer = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 60;
var timerInterval; //global

function setTime() {
  timerInterval = setInterval(timer, 60000);
}


function timer() {
  secondsLeft--;
  timerElement.textContent = secondsLeft + "time's running out";

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    sendmessage();
  }
}
 function sendMessage() {
   timerElement.textContent = "Time's up";
 }

/*var count = 60;
var timer = setInterval(function() {
  console.log(count);
  count--;
  if(count === 0) {
    stopInterval()
  }
}, 1000);

var stopInterval = function() {
  console.log('time is up!');
  clearInterval(timer);
}*/
function gameOver() {
  questionsElement.classList.add("hide");
  endScreenElement.classList.remove("hide");
  document.getElementById("final-score").textContent = timeLeft;
}
// local storage 

function storeScores() {

  var highScore = {
    initials: initials.value,
    highscore: score.value,
  };
    localStorage.setItem("highscores", JSON.stringify("highscores"));
}

function renderScores() {
    let storeScores = JSON.parse(localStorage.getItem(scorelist));

    //update scores if scores retrieved from local
    if (storeScores !== null) {
        highscore = storedscores;
    } 
}


startBtn.addEventListener("click", startQuiz)
