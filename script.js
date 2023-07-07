var startScreen = document.getElementById("start-screen");
var gameScreen = document.getElementById("game-screen");
var button = document.getElementById("push-me");
var count = document.getElementById("countdown");
var timer = 10;
var timeInterval;


var questions = [
  {
    question: "what color is the sky?",
    answer1: "blue",
    answer2: "red",
    answer3: "yellow",
    answer4: "orange",
    correct: "blue"
  },
  {
    question: "what color is the ground?",
    answer1: "blue",
    answer2: "red",
    answer3: "yellow",
    answer4: "brown",
    correct: "brown"
  },
  {
    question: "what color is the water?",
    answer1: "blue",
    answer2: "red",
    answer3: "yellow",
    answer4: "orange",
    correct: "blue"
  },
]
var currentQuestionIndex = 0

// var currentQuestion = questions[currentQuestionIndex]
function myFunction() {
  startScreen.classList.add("hidden");

  gameScreen.classList.remove("hidden");
  timeInterval = setInterval(displayTimer, 1000);
}

function displayTimer() {

  count.textContent = timer;
  if(timer<=0){
    console.log("I am going to stop!")
    myStop()
  } else{
    timer = timer- 1;
  }
}


var myFunctionstop = 0;
function myStop(count) {
  clearInterval(timeInterval);
}
button.addEventListener("click", myFunction);




// function add(num1, num2){
//   return num1 + num2
// }

// add(2,324)