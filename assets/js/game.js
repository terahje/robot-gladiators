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
    while(enemyHealth > 0) {
            // Alert users that they are starting the round

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
 if(promptFight === "fight" || promptFight === "FIGHT") {
        //remove enemy's health by subtracting the amount set in the playerAttack
    
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
  

  console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
  );

  // check enemy's health
  if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
  }
  else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
  }

  console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "health remaining.");

  //check player's health
  if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
  }
  else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
  }
  // if player choses to skp
} else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes(true), leave fight
    if(confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight. Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;
    }
    // if no (false), ask questions again by running fight() again
    else {
        //fight();
    }
    
} else {
    window.alert("You need to pick a valid option. Try again!");


}
}
    }

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
}
