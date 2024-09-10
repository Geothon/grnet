let playerchoice

let aichoice

function rock() {
 playerchoice = "rock"    
}

function paper() {
playerchoice = "paper"
}

function sissors() {
playerchoice = "sissors"
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let number = getRandomInt (3)

console.log(number)

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
};
 
game()
console.log("test")
console.log(playerchoice)
console.log(aichoice)