/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */

$("#startButton").on("click", function() {
  randomNum = Math.floor(Math.random() * 101) + 19; // # between 19-120 
  $(".randomNumber").text(randomNum);
});

//set all of the crystals to generate one random number 1-12
greenCrystal = Math.floor(Math.random() * 11) + 1;
pinkCrystal = Math.floor(Math.random() * 11) + 1;
yellowCrystal = Math.floor(Math.random() * 11) + 1;
blueCrystal = Math.floor(Math.random() * 11) + 1;

//  Decaring variables for wins and losses, and users current score
var userTotal= 0;
var wins = 0;
var losses = 0;

//Logs 0 at the start of every game
$(".userScore").text(userTotal);

//logs the current number of wins and losses
$(".stats").text(wins);
$(".stats").text(losses);

//resets the game after each loss/win but keeps the score board intact.
//Resets a new random number for the user to guess
function reset() {
  randomNum = Math.floor(Math.random() * 101) + 19;
  console.log(randomNum);
  $(".randomNumber").text(randomNum);
  greenCrystal = Math.floor(Math.random() * 11) + 1;
  pinkCrystal = Math.floor(Math.random() * 11) + 1;
  yellowCrystal = Math.floor(Math.random() * 11) + 1;
  blueCrystal = Math.floor(Math.random() * 11) + 1;
  userTotal = 0;
  $(".userScore").text(userTotal);
}

//adds the wins to the userTotal
function win() {
  alert("You won!");
  wins++;
  $(".wins").text("Wins: " + wins);
  reset();
}
//addes the losses to the userTotal
function loss() {
  alert("You lose!");
  losses++;
  $(".loss").text("Losses: " + losses);
  reset();
}

//sets up click for jewels
$(".greenCrystal").on("click", function() {
  userTotal = userTotal + greenCrystal;
  console.log("New userTotal= " + userTotal);
  $(".userScore").text(userTotal);
  //sets win/lose conditions
  if (userTotal == randomNum) {
    win();
  } else if (userTotal > randomNum) {
    loss();
  }
});

//sets up click for jewels
$(".pinkCrystal").on("click", function() {
  userTotal = userTotal + pinkCrystal;
  console.log("New userTotal= " + userTotal);
  $(".userScore").text(userTotal);
  //sets win/lose conditions
  if (userTotal == randomNum) {
    win();
  } else if (userTotal > randomNum) {
    loss();
  }
});
//sets up click for jewels
$(".yellowCrystal").on("click", function() {
  userTotal = userTotal + yellowCrystal;
  console.log("New userTotal= " + userTotal);
  $(".userScore").text(userTotal);
  //sets win/lose conditions
  if (userTotal == randomNum) {
    win();
  } else if (userTotal > randomNum) {
    loss();
  }
});
//sets up click event and check on the blue crystal
$(".blueCrystal").on("click", function() {
  userTotal = userTotal + blueCrystal;
  console.log("New userTotal= " + userTotal);
  $(".userScore").text(userTotal);
  //sets win/lose conditions
  if (userTotal == randomNum) {
    win();
  } else if (userTotal > randomNum) {
    loss();
  }
});
