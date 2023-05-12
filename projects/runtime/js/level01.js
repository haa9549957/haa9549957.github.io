var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = [
            {
              name: "Robot Romp",
              number: 1,
              speed: -3,
              gameItems: [
                { type: "ween", x: 400, y: groundY-100 },
                { type: "ween", x: 600, y: groundY-20 },
                { type: "sawblade", x: 900, y: groundY-220 },
                { type: "marker", x: 900, y: groundY-10 },
              ],
            },
            {
              name: "Robot Rampage",
              number: 2,
              speed: -3,
              gameItems: [
                { type: "enemy", x: 400, y: groundY-50 },
                { type: "enemy", x: 600, y: groundY-100 },
                { type: "reward", x: 900, y: groundY -200 },
                { type: "reward", "x": 1700, "y": groundY - 60},
              ],
            },
            {
                name: "Level Awesome",
                number : 3,
                speed: -2,
                gameItems: [
                { type: "sawblade", x: 400, y: groundY },
                { type: "enemy", x: 600, y: groundY },
                { type: "enemy", x: 900, y: groundY },
                ]
            }
          ];
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);
        

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE 
        
        createSawBlade(600,362);
        createSawBlade(400,362);
        createSawBlade(1500,250);
       
        var enemy = game.createGameItem("enemy", 25);
        var violetSquare = draw.rect(50, 50, "violet");
        var redSquare = draw.rect(50, 50, "red");
        var greenSquare = draw.rect(50,50, "green");
        violetSquare.x = -25;
        violetSquare.y = -25;
        redSquare.x = -200;
        redSquare.y = -300;
        greenSquare.x = -500
        greenSquare.y = -400 
        enemy.addChild(violetSquare);
        enemy.addChild(redSquare);
        enemy.addChild(greenSquare);

        enemy.x = 400;
        enemy.y = groundY - 50;

        game.addGameItem(enemy);

        enemy.velocityX = -5
        enemy.velocityY 
        enemy.rotationalVelocity = -5
        
        enemy.onPlayerCollision = function(){
            game.changeIntegrity(-10)

        };

        enemy.onProjectileCollision = function(){
            game.increaseScore(100);
            enemy.shrink();
        }

        createReward(100, 100);

        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
            var obstacleImage = draw.bitmap("img/sawblade.png");
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -hitZoneSize;
            obstacleImage.y = -hitZoneSize;
        }

        function createReward(x,y) {
            var enemy = game.createGameItem("enemy", 50);
            var redSquare = draw.bitmap("img/reward.jpg");
            redSquare.x = 200;
            redSquare.y = 200;
            enemy.addChild(redSquare);
            
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -3;
    
            enemy.onPlayerCollision = function() {
                game.startLevel()
            };
            enemy.onProjectileCollision = function () {
                game.startLevel()
                enemy.shrink();
            }
          }
          for (var i = 0; i < levelData.length; i++) {
            var level = levelData[i];
            var gameItems = level.gameItems;
            for (var j = 0; j < gameItems.length; j++) {
                var item = gameItems[j];
                var x = item.x;
                var y = item.y;
                var type = item.type;
                if (type === "sawblade") {
                    createSawBlade(x, y);
                } else if (type === "ween") {
                    createWeen(x, y);
                } else if (type === "enemy") {
                    createEnemy(x, y);
                } else if (type === "reward") {
                    createReward(x, y);
                } else if (type === "marker") {
                    createMarker(x, y);
                }
            }
        }
    }
        // DO NOT EDIT CODE BELOW HERE
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
