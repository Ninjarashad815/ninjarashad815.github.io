var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    
     var hitZoneSize = 25;
     var damageFromObstacle = 10;
     var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
     sawBladeHitZone.x = 1000;
     sawBladeHitZone.y = 407;
     game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    obstacleImage.x = -hitZoneSize;
    obstacleImage.y = -hitZoneSize;
    sawBladeHitZone.addChild(obstacleImage);
    function createSawBlade(x, y) {
  var hitZoneSize = 25;
  var damageFromObstacle = 10;
  var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
  sawBladeHitZone.x = x;
  sawBladeHitZone.y = y;
  game.addGameItem(sawBladeHitZone);

  var obstacleImage = draw.bitmap("img/sawblade.png");
  obstacleImage.x = -hitZoneSize;
  obstacleImage.y = -hitZoneSize;
  sawBladeHitZone.addChild(obstacleImage);
}
 // TODO 7
// 7a) Create the enemy game item
  var enemy = game.createGameItem("enemy", 25);
  var redSquare = draw.rect(50, 50, "red");
  redSquare.x = -25;
  redSquare.y = -25;
  enemy.addChild(redSquare);

// 7b) Position the enemy on screen
  enemy.x = 400;
  enemy.y = groundY - 50;

// 7c) Add the enemy to the game
  game.addGameItem(enemy);
// TODO 8
// TODO 8a)
  enemy.velocityX = -2; // Moves left at 2 pixels per frame
  enemy.rotationalVelocity = 5; // Spins clockwise
// TODO 8b)
  enemy.onPlayerCollision = function () {
  game.changeIntegrity(-10); // Halle loses 10 health
};
// TODO 8c)
  enemy.onProjectileCollision = function () {
  game.increaseScore(100); // Gain 100 points
  enemy.fadeOut();         // Enemy disappears
};
  function createEnemy(x, y) {
  var enemy = game.createGameItem("enemy", 25);
  var redSquare = draw.rect(50, 50, "red");
  redSquare.x = -25;
  redSquare.y = -25;
  enemy.addChild(redSquare);

  enemy.x = x;
  enemy.y = y;

  game.addGameItem(enemy);

  enemy.velocityX = -2;
  enemy.rotationalVelocity = 5;

  enemy.onPlayerCollision = function() {
    // ... collision code ...
  };
}
  function createReward(x, y) {
  var reward = game.createGameItem("reward", 25);
  var yellowCircle = draw.circle(25, "yellow");
  yellowCircle.x = -12.5;
  yellowCircle.y = -12.5;
  reward.addChild(yellowCircle);

  reward.x = x;
  reward.y = y;
  game.addGameItem(reward);

  // When HalleBot touches the reward
  reward.onPlayerCollision = function () {
    game.increaseScore(50);       // Increase score
    // Or use: game.changeIntegrity(10); // Increase health
    reward.fadeOut();             // Make it disappear
  };

  // When HalleBot shoots the reward
  reward.onProjectileCollision = function () {
    game.increaseScore(25);       // Smaller bonus for shooting
    reward.shrink();              // Shrinks out of existence
  };
}
  function createMarker(x, y) {
  var marker = game.createGameItem("marker", 25);
  var greenSquare = draw.rect(50, 50, "green");
  greenSquare.x = -25;
  greenSquare.y = -25;
  marker.addChild(greenSquare);

  marker.x = x;
  marker.y = y;
  game.addGameItem(marker);

  // Transition to next level when HalleBot touches the marker
  marker.onPlayerCollision = function () {
    startLevel(); // move to next level
  };

  // Transition to next level when HalleBot shoots the marker
  marker.onProjectileCollision = function () {
    startLevel(); // move to next level
  };
}
// TODO 12
function runLevel(level) {
  for (var i = 0; i < level.gameItems.length; i++) {
    var item = level.gameItems[i];
    if (item.type === "sawblade") {
      createSawBlade(item.x, item.y);
    } else if (item.type === "enemy") {
      createEnemy(item.x, item.y);
    } else if (item.type === "reward") {
      createReward(item.x, item.y);
    } else if (item.type === "marker") {
      createMarker(item.x, item.y);
    }
  }
}


    function startLevel() {
      // TODO 13 goes below here
    // a13) 
    var level = levelData[currentLevel];
   // b13)
    var levelObjects = level.gameItems;
   // c13)
   for (var i = 0; i < levelObjects.length; i++) {
  var item = levelObjects[i];
  var x = item.x;
  var y = item.y;

  if (item.type === "sawblade") {
    createSawBlade(x, y);
  } else if (item.type === "enemy") {
    createEnemy(x, y);
  } else if (item.type === "reward") {
    createReward(x, y);
  } else if (item.type === "marker") {
    createMarker(x, y);
  }
}
  // d13)
   // DELETE these if they exist outside the loop
  createSawBlade(400, groundY);
  createEnemy(800, groundY - 50);
  createReward(1200, groundY - 60);
  createMarker(1600, groundY - 50);




      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
