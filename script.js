let playerchoice
let aichoice
let number
let outputDisplay = document.getElementById("output-display")

function rock() {
 playerchoice = "rock"
 newNum()
 game()
}

function paper() {
playerchoice = "paper"
newNum()
game()
}

function sissors() {
playerchoice = "sissors"
newNum()
game()
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function newNum() {
  number = getRandomInt(4)

  if(number == 1) {
  aichoice = "rock"    
  }

 else if(number == 2) {
  aichoice = "paper"
 }

 else if(number == 3) {
  aichoice = "sissors"
 }
}

function output(text) {
  outputDisplay.innerHTML = text
}

 function game() {
if(playerchoice == "rock" && aichoice =="rock") {output("tie")}
 
else if(playerchoice == "rock" && aichoice == "paper") {output("ai win")}

else if(playerchoice == "rock" && aichoice == "sissors") {output("player win")}

else if(playerchoice == "paper" && aichoice == "rock") {output("player win")}

else if(playerchoice == "sissors" && aichoice == "rock") {output("ai win")}

else if(playerchoice == "sissors" && aichoice == "paper") {output("player win")}

else if(playerchoice == "paper" && aichoice == "sissors") {output("ai win")}

else if(playerchoice == "paper" && aichoice == "paper") {output("tie")}

else if(playerchoice == "sissors" && aichoice == "sissors") {output("tie")}

else {output("Error")}
};