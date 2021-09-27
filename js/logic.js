var time = questions.length * 10;
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
     startScreen.setAttribute("class", "hide")

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
// countdown timer 

var count = 60;
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
}



// local storage 

function storescores() {
    localStorage.setItem("highscores", JSON.stringify("scorelist"));
}

function displayScores() {
    let storedScoreList = JSON.parse(localStorage.getItem(scorelist));

    //update scores if scores retrieved from local
    if (storedScoreList !== null) {
        scorelist = storedscorelist;
    } 
}


startBtn.addEventListener("click", startQuiz);



