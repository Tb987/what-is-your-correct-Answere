var startScreen=document.getElementById("start-screen")
var gameScreen=document.getElementById("game-screen")

function myFunction() {
startScreen.classList.add("hidden")

gameScreen.classList.remove("hidden")

  }
      var button=document.getElementById("push-me")
     button.addEventListener("click", myFunction);