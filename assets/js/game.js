var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
// Game States
// "WIN" - Player Robot has defeated all enemy robots
//     * Fight all enemy robots
//     * Defeat each enemy robot
// "Lose" - Player robot's health is zero or less

// You cna also log mulitple values at once like this

var fight = function(enemyName) {
    //repeat and execute as long as the enemy robot is alive
    while(playerHealth > 0 && enemyHealth > 0) {
            // Alert users that they are starting the round
  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

 // if player choses to skp
 if (promptFight === "skip" || promptFight === "SKIP") {
     //confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes(true), leave fight
    if(confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney" , playerMoney);
        break;
    }
 }
  //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
  enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
  enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
  

  // check enemy's health
  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      break;
  }  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  //remove player's health by subtraciting the amount set in the enemyAttack variable
  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health remaining.");

  //check player's health
  if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      break;
  }  else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
  }
 }
}

var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        //let user know what round they are in
        if(playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        //pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        //reset enemyHealth before starting new fight
        enemyHealth = 50;

        //use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;

        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
     }
}
//after the loop ends, player is either out of health or enemeies to fight, so run the endGame Function
endGame()  ;
};

// function to end the entire game
var endGame = function() {
   // if player is still alive, player win!
   if(playerHealth > 0) {
       window.alert("Great job, you've surviced the game! You now have a score of " + playerMoney + ".");
   } 
   else {
       window.alert("You've lost your robot in battle.")
   }

//ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");
if(playAgainConfirm) {
    //restart the game
    startGame();
}
else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
};

// start the game when the page loads
startGame();