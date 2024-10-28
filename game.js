"use strict";
//alert("connected")

  //create an event listener for click event of button
  //document.getElementById("submit").onclick = checkGuess
document.getElementById("submit").addEventListener("click", checkGuess)
document.getElementById("start").onclick = NewGame


//declare variables
let pickednumber = 0
const maxTries = 3
let count = 0
let gameover = false


//call function 
NewGame()

//create  function
function checkGuess(){
  //alert("welcome")
  let message=""
  //get the user's guess from the textbos   
   const userguess=parseInt(document.getElementById("guess").value)
   console.log("userguess is " + userguess)
   console.log("types is " + typeof(userguess))

    
    
    //comparee guess to picknumber
    if (pickednumber == userguess){
        message = "correct"
        //signal that i won
        gameover = true

        //re-enable new game button
         document.getElementById("start").disabled = false


    }
    else if (userguess < pickednumber){
        message = "Too low"
    }
    else{userguess > pickednumber
       message = "Too high"
    }

    //incrment counter
    count++  //same as count = count + 1 or count += 1

    //console.log("message is " + message)

    //check if i am out of tries
    if (count == maxTries && gameover == false)
       message = "sorry, out of turns. The number is " + pickednumber
     document.getElementById("start").disabled = false

    
    //display message of 'corrct' or 'incorrect'
    document.getElementById("ans").textContent = message

    //end guess
}

function NewGame () {
  console.log("New Game ")
  document.getElementById("start").disabled = true

  //pick a number
  
  //generate a random number between 1 and 100
  pickednumber = 1 +  Math.floor(Math.random() * 100)
  console.log("pickednumber is " + pickednumber)
 
  //reset variable
  count = 0
  gameover = false
}




 
