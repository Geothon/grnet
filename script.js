let playerchoice = ""

let aichoice = ""

function rock() {
let playerchoice = "rock"    
}

function paper() {
let playerchoice = "paper"
}

function sissors() {
let playerchoice = "sissors"
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let number = getRandomInt (3)

if(number==1) {
aichoice = "rock"    
}

 else if(number==2) {
aichoice = "paper"
 }

 else if(number==3) {
aichoice= "sissors"
 }

 function game() {
if(playerchoice==rock & aichoice==rock) {console.log ("tie")}
 
else if(playerchoice==rock & aichoice==paper) {console.log ("ai win")}

else if(playerchoice==rock & aichoice==sissors) {console.log ("player win")}

else if(playerchoice==paper & aichoice==rock) {console.log ("player win")}

else if(playerchoice==sissors & aichoice==rock) {console.log ("ai win")}

else if(playerchoice==sissors & aichoice==paper) {console.log ("player win")}

else if(playerchoice==paper & aichoice==sissors) {console.log ("ai win")}

else if(playerchoice==paper & aichoice==paper) {console.log ("tie")}

else if(playerchoice==sissors & aichoice==sissors) {console.log ("tie")}
 }
 
 game()