
// wire the html elements

var randomGuess = document.getElementById("random-number"),
    rndButton = document.getElementById("chk-button"),
    divGuess = document.getElementById("guess"),
    divScore = document.getElementById("score");        
    score = 0;



//generate random number
function getRandomInt()
{
 // min = Math.ceil(min);
  min =1;
  max= 6;
 // max = Math.floor(max);
  return Math.floor(Math.random()* (max - min +1)) + min;
  //return Math.floor(Math.random);
}

//check user's guess for accuracy
var checkAnswer = function checkAnswer()
{
  var answer = getRandomInt();
    if (parseInt(randomGuess.value)== answer)
      {
        divGuess.innerText += "You guessed correctly. The random number is " +  answer + "\n" +
        "Guess = " + parseInt(randomGuess.value)+ "\n";
        score++;
        divScore.innerText += "Your current score is " + score + "\n";
      }
    else
      {
         divGuess.innerText += "You guessed wrong. The random number is " +  answer + "\n" + 
         "Guess = " + parseInt(randomGuess.value)+ "\n";
         divScore.innerText += "Your current score is " + score + "\n"; 
      }
}


//write in Div if the answer is correct

rndButton.addEventListener("click", function(){
  checkAnswer();
});

//get and record score

