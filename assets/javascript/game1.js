// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.
var computerNumber;
var wins = 0;
var losses = 0;
var amberGem;
var greenGem;
var blueGem;
var purpleGem;
var totalScore;

//Generage random number for a range of two values
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function turnFinished(score) {
  if (score === computerNumber) {
    setTimeout(function() {
      wins++;
      $("#playerWins").html(wins);
      alert("You Win!");
      reset();
    }, 100);
  } else if (score > computerNumber) {
    setTimeout(function() {
      losses++;
      $("#playerLosses").html(losses);
      alert("You Lose!");
      reset();
    }, 100);
  }
}

function reset() {
  totalScore = 0;
  computerNumber = getRandom(19, 120);
  amberGem = getRandom(1, 12);
  greenGem = getRandom(1, 12);
  blueGem = getRandom(1, 12);
  purpleGem = getRandom(1, 12);
  $("#playerScore").html(totalScore);
  $("#computerNumber").html(computerNumber);
  //console.log("amber: " + amberGem, "green: " + greenGem, "blue: " + blueGem, "purple: " + purpleGem);
}
// -------Gem functionality -------
$("#amberGem").click(function() {
  totalScore += amberGem;
  $("#playerScore").html(totalScore);
  // call function to check if game ends

  turnFinished(totalScore);
});

$("#greenGem").click(function() {
  totalScore += greenGem;
  $("#playerScore").html(totalScore);
  // call function to check if game ends
  turnFinished(totalScore);
});

$("#blueGem").click(function() {
  totalScore += blueGem;
  $("#playerScore").html(totalScore);
  // call function to check if game ends
  turnFinished(totalScore);
});

$("#purpleGem").click(function() {
  totalScore += purpleGem;
  $("#playerScore").html(totalScore);
  // call function to check if game ends
  turnFinished(totalScore);
});

//on page load
reset();